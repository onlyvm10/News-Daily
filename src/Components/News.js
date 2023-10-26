import React, { Component } from "react";
import NewsItem from "./NewsItem";
import image from "./newsBanner.jpg";
import Loader from "./Loader";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {
    results = [];


    static defaultProps = {
        pageSize: 8,
        country: 'in',
        category: 'general'
    };

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            results: this.results,
            page: 1,
            totalResults: 0,
            loading: true


        }
        document.title = `${this.capatilize(this.props.category)}-News Daily`;
    }


    async componentDidMount() {
        this.props.setProgress(0);
        let url = `https://newsdata.io/api/1/news?apikey=pub_318640ca80814b38ba5fe84e2d59b8cf35352&country=${this.props.country}&category=${this.props.category}&size=${this.props.pageSize}&language=en`;

        this.props.setProgress(30);
        let data = await fetch(url);
        let parcedData = await data.json();
        this.props.setProgress(70);
        this.setState({ results: parcedData.results, totalResults: parcedData.totalResults, loading: false , page:parseInt(parcedData.nextPage)})
        this.props.setProgress(100);
    }


    capatilize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    fetchMoreData = async () => {

        //this.setState({page:this.state.page+1 });
        let url = `https://newsdata.io/api/1/news?apikey=pub_318640ca80814b38ba5fe84e2d59b8cf35352&country=${this.props.country}&category=${this.props.category}&size=${this.props.pageSize}&page=${this.state.page}&language=en`;


        let data = await fetch(url);
        let parcedData = await data.json();
        this.setState({ results: this.state.results.concat(parcedData.results),page:parseInt(parcedData.nextPage)})
    };




    render() {
        return (
            <>

                <h1 style={{ textAlign: "center", color: `${this.props.mode === 'dark' ? 'white' : 'black'}`, marginTop: "150px" }}>
                    News Daily - Top {this.props.category==='top'?'General':this.capatilize(this.props.category)} Headlines
                </h1>
                {this.state.loading && <Loader />}

                <InfiniteScroll
                    dataLength={this.state.results.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.results.length < this.state.totalResults}
                    loader={<Loader />}
                >
                    <div className="container-fluid" style={{ marginTop: "30px" }}>
                        <div className="row" >
                            {this.state.results.map((element) => {
                                return <div className="col-md-3" key={element.pubDate}>
                                    <NewsItem source={element.source_id} author={element.creator} date={element.pubDate} mode={this.props.mode} title={element.title} description={element.description} imageUrl={element.image_url ? element.image_url : image} actualUrl={element.link} />
                                </div>
                            })}

                        </div>
                    </div>
                </InfiniteScroll>



            </>


        );
    }
}

export default News;
