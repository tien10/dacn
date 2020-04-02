import React, { Component } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'

export default class Products extends Component {
    render() {
        return (
            <div>
                <Hero hero="roomsHero">
                    <Banner title="Our Products">
                        <Link to="/" className="btn-primary">
                            Return Home
                        </Link>
                    </Banner>
                </Hero>
            </div>
        )
    }
}
