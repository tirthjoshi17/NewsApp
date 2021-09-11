import React, { Component } from 'react'
import New from './New'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export default class NewsComponent extends Component {
    constructor(props) {
        super();
        // console.log(props.load);
        this.state = {
            page: 1,
            remainingLength: 0,
            "articles": [],
            loading: props.load,
            apiKey:process.env.REACT_APP_API_KEY
        }
        
    }


    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    async componentDidMount(a) {
        // console.log("This is cdm!");
        if(!a)
        {
            this.props.progress(20);
        }
        // console.log(a);
        let url;
        if (!this.props.query) {
            url = `https://newsapi.org/v2/top-headlines?country=in&apikey=${this.state.apiKey}&page=${this.state.page}&pageSize=9&category=${this.props.category}`;
        }
        else {
            url = `https://newsapi.org/v2/everything?q=${this.props.query}&apikey=${this.state.apiKey}&page=${this.state.page}`;
        }
        let response = await fetch(url);
        let news = await response.json();
        var len = this.state.remainingLength;
        if (!len) {
            len = news.totalResults - news.articles.length;
        }
        else {
            len = len - this.state.articles.length;
            if (len < 0) {
                len = 0;
            }
        }
        if(!a)
        {
            this.props.progress(100);
        }
        this.setState({ articles: this.state.articles.concat(news.articles), remainingLength: len,loading:false });
        // document.getElementById('row').style.filter = "blur(0px)";
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - TopNews`;
    }

    // Paging = (e) => {
    //     // console.log(e.target.dataset.value);\
    //     this.setState({ loading: true });
    //     // document.getElementById('newsComponent').innerHTML="";
    //     if (e.target.dataset.value === "next") {
    //         // this.state.page++;
    //         this.setState({ page: this.state.page + 1 });
    //     }
    //     else if (e.target.dataset.value === "previous") {
    //         // this.state.page--;
    //         this.setState({ page: this.state.page - 1 });
    //     }
    //     this.componentDidMount();
    //     window.scrollTo(0, 0);
    //     // console.log(this.state);
    // }

    fetchMoreData = () => {
        this.setState({loading: true, page: this.state.page + 1 });
        this.componentDidMount(1);
    };
    render() {
        return (
            <>
                <div className="conatiner" id="newsComponent">
                    <div className="container my-3 text-center">
                        <h1>Top {this.capitalizeFirstLetter(this.props.category)} Headlines - newnew News</h1>
                    </div>
                    {/* {this.state.loading && <Spinner/>} */}
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.remainingLength !== 0}
                        loader={<Spinner />}
                        scrollableTarget="scrollableDiv"
                    >
                        <div className="container">

                            <div className="row" id="row">
                                {this.state.articles.length ? this.state.articles.map((e) => {
                                    return (
                                        <div className="col-md-4 my-1" key={e.url}>
                                            <New timing={e.publishedAt} author={e.author ? e.author : null} img={e.urlToImage ? e.urlToImage : "https://i.pinimg.com/originals/fd/78/c4/fd78c47f2a009df65b5b5a46f4437399.png"} title={e.title ? e.title : ""} description={e.description ? e.description : ''} url={e.url} source={e.source.name} />
                                        </div>
                                    )
                                }) : null}
                            </div>
                        </div>
                    </InfiniteScroll>
                    {/* <div className="container d-flex justify-content-between my-5">
                        <button className="btn btn-sm btn-dark" disabled={this.state.page < 2} data-value="previous" onClick={this.Paging}>&larr; Previous</button>
                        <button className="btn btn-sm btn-dark" disabled={!this.state.remainingLength} data-value="next" onClick={this.Paging}>Next &rarr;</button>
                    </div> */}
                </div>
            </>
        )
    }
}
