import React, { Component } from "react";

export class NewsItem extends Component {


    render() {
        let { title, description, imageUrl, actualUrl, author, date, source } = this.props;
        return (
            <div className="my-4">


                <div className="card">

                    <div>
                        <span className="badge rounded-pill bg-danger " style={{
                            display: "flex",
                            position: "absolute",
                            right: "0"
                        }}>
                            {source}
                        </span>
                    </div>
                    <img src={imageUrl} className="card-img-top" alt="Loading" />

                    <div className="card-body" style={{ color: `${this.props.mode === 'dark' ? 'white' : 'black'}`, backgroundColor: `${this.props.mode === 'dark' ? '#212529' : 'white'}` }}>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">
                            {description}
                        </p>
                        <div>  <a href={actualUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
                            Read more
                        </a>

                            <p className="card-text my-1" ><small className={`text-${this.props.mode === 'dark' ? 'light' : 'dark'}`} >By {author ? author : "Unknown"}, {new Date(date).toGMTString()}</small></p>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;


