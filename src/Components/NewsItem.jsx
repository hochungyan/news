const NewsItem = ({ newsItem }) => {
    const { webTitle, webPublicationDate, webUrl, thumbnail } = newsItem;

    return (
  <>
            <a id="top"></a>
            <div className="newsContainer">
                <div className={webPublicationDate}>
                    <a href={webUrl} target="blank"><img className="picture" src={thumbnail} alt="test alt" width="600" /></a>
                </div>
                <div className="newsBox">
                    <p>{webTitle}</p>
                </div>
            </div>
            <div className="space">

            </div>
            <div className ="topLinkContainer">
            <a href="top" className="topLink">Back to Top</a>
            </div>
        </>
    );
};
export default NewsItem;