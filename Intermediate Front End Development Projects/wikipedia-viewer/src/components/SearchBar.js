import React, { Component } from 'react';
import { getArticles } from './searchapi'


class Searchbar extends Component{
    constructor(props){
        super(props)
        this.state ={
            container: 'container',
            front : 'front',
            frontdescription: 'front-description',
            logoFront: 'logo-front',
            wiki_description: 'wiki_description',
            formfront: 'form-front',
            inputfront : 'input-front',
            random : 'random',
            randomtext: 'Random',
            farandom: 'fa fa-random fa-display',
            inputvalue:'',
            eks: 'eks',
            articles:[]
        }
        this.activeSearchBar = this.activeSearchBar.bind(this)
        this.handleInput = this.handleInput.bind(this)
        this.resetInputValue = this.resetInputValue.bind(this)
    }

activeSearchBar(){
    this.setState({
        container: 'back-container',
        wiki_description:'front-desc', 
        formfront: 'form-back',
        front: 'back',
        frontdescription: 'back-description',
        logoFront: 'brand-logo',
        inputfront: 'input-back',
        random: 'random-back',
        randomtext: '',
        farandom: 'fa fa-random',
        eks: 'fa fa-times'
    })
}

handleInput(event){
    event.preventDefault()
    const {value} = event.target
    this.setState({inputvalue: value})

    getArticles(value).then((results) => {
        let localarticles = []
        Object.keys(results).map(function(e) {
         localarticles.push(results[e])
        })
        this.setState({ articles: localarticles})
    })
}
resetInputValue(){
    event.preventDefault()
    this.setState({
        container: 'container',
        front : 'front',
        frontdescription: 'front-description',
        logoFront: 'logo-front',
        wiki_description: 'wiki_description',
        formfront: 'form-front',
        inputfront : 'input-front',
        random : 'random',
        randomtext: 'Random',
        farandom: 'fa fa-random fa-display',
        inputvalue:'',
        eks:'eks',
        articles:[]
    })
}

    render(){

        const{ articles } = this.state

        return(
        <div className="pageContainer">
        <div className={this.state.container}>
         <div className={this.state.front}>
           <div className={this.state.frontdescription}>
                <a href="/"><img className={this.state.logoFront}  src="/img/logo.png" alt="Wikipedia logo"/></a>
                <div className={this.state.wiki_description}>
                    <h1>WikipediA</h1>
                    <p>The Free Encyclopedia</p>
                </div>
            </div>
            <form action="#" className={this.state.formfront} onChange={ this.activeSearchBar }>
                <input type="text" className={this.state.inputfront} value={this.state.inputvalue} onChange={this.handleInput}/>
            </form>
            <a href="https://en.wikipedia.org/wiki/Special:Random"><button className={this.state.random}><i className={this.state.farandom} aria-hidden="true"></i>&nbsp;{this.state.randomtext}</button></a>
            <i className={this.state.eks} aria-hidden="true" onClick={this.resetInputValue} ></i>
         </div>
         
     </div>

      {/*List item*/}
      <div className="search-result-container">
                 <ul className="search-results">
                   {articles.map((pages) => {
                       let baseurl = "https://en.wikipedia.org/?curid="+pages.pageid
                       return(
                           <a href={baseurl}>
                           <li className="search-result-item">
                            <h3>{ pages.title }</h3>
                            <p>{ pages.extract }</p>
                           </li></a>

                       )
                    })}
                </ul>
            </div>
     </div>
        );
    }
}

export default Searchbar;