import React, { Component } from "react";
import Loader from "./Loader";
import Newsitem from "./Newsitem";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {
    static defaultProps={
      country:'in',
      pageSize:5,
      category:"general",
    }

    static propTypes={
      country:PropTypes.string,
      pageSize:PropTypes.number,
      category:PropTypes.string,
    }
    capitalized =(string)=>{
      return string.charAt(0).toUpperCase() +string.slice(1);
    }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0,
    };
    document.title=`${this.capitalized(this.props.category)}`;
  }
  async updateNews()
  {
    this.props.setProgress(0); 
    const url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
    let data = await fetch(url);
    this.props.setProgress(30); 
    let parsedata = await data.json();
     
    console.log(parsedata);
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
      loading:false ,
    });
    this.props.setProgress(100); 
  }

  async componentDidMount() {
    this.updateNews();
  }
  

   handelnextclick = async () => {
    this.setState({page:this.state.page + 1});
    this.updateNews();
     }

  handelprevclick = async () => {
  
  this.setState({page:this.state.page - 1})
  this.updateNews();
   }

    fetchMoreData = async() => {
     this.setState({page:this.state.page + 1})
        const url =
        `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
       
        let data = await fetch(url);
          let parsedata = await data.json();
          this.setState({
        articles: this.state.articles.concat(parsedata.articles),
        totalResults: parsedata.totalResults,
      });
    };


  render() {
    return (
      <div className="container my-3 ">
        <h3 className="text-center" style={{marginTop:'10vh'}}>
      
          News Hub<span className="badge bg-info mx-2">Exclusive News</span>
        </h3>
        {this.state.loading && <Loader/>}
       
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Loader/>}
        >

        <div className="container my-2" id="container" style={{backgroundColor:'#e7ecf2',boxShadow:'5px 5px #e7ecf2',color:'black'}}> 
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title ? element.title.slice(0, 40) : " "}
                  description={
                    element.description ? element.description.slice(0, 88) : " "
                  }
                  imgurl={element.urlToImage}
                  newsurl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  
                />
                
              </div>
            );
          })}
          </div>
        </div>
        </InfiniteScroll>

        
      </div>
    );
  }
}

export default News;
