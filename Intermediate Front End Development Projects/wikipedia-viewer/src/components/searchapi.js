import { get } from 'axios'

module.exports.getArticles = (query)=>{
    
    let url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=15&prop=extracts|pageimages&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&origin=*&gsrsearch='+query
    
    return new Promise((resolve, reject) => {
        let articles = {}
        get(url).then(({data: wikiData}) => {
        articles = wikiData.query.pages
        resolve(articles)
    }).catch((error) => reject(error))
    })

    
}