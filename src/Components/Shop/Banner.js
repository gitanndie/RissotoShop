import React, { Component } from 'react'
import banner from '../../Images/banner.jpg'

export default class Banner extends Component {
    render() {
        return (
            <div>
                <section className="row" id="banner">
                <article className="col-lg-12">
                    <img className="img-fluid card-img" src={banner} />
                </article>
            </section>
            </div>
        )
    }
}
