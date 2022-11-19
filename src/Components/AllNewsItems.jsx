import mockNewsData from '../mockNewsData.json';
import NewsItem from './NewsItem';
import NewsItemModel from './utils/NewsItem.model';

const AllNewsItems = () => {

    const newsItems = mockNewsData.response.results;

    const allNewsItems = newsItems.map(aNewsItem => {
        const { webTitle, webPublicationDate, webUrl, fields } = aNewsItem;
        const newsItem = new NewsItemModel(webTitle, webPublicationDate, webUrl, fields.thumbnail);
        return <NewsItem newsItem={newsItem} key={webPublicationDate} />
    });


    return (
        <>

            <div className="row">

                <ul>
                    <li>{allNewsItems}</li>
                </ul>

            </div>

        </>
    )
};

export default AllNewsItems;


// const AllNewsItems = () => {

//     const mockNews = mockNewsData.response.results;

//     return (
//         <div className='sample'>
//             {mockNews.map((story, index) => (
//                 <div key={index}>
//                     <h2>{story.fields.headline}</h2>
//                     <img src={story.fields.thumbnail} alt={story.fields.byline} />
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default AllNewsItems;