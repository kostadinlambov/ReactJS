import React from 'react';

export default class Details extends React.Component {
 content = () =>  this.props.bio
            ?   ( <div>
                        <div className="image">
                        <img src={this.props.url}/>
                        </div>
                        <div className="info">
                            <p>Name: <strong>{this.props.name}</strong></p>
                            <p>Bio:{this.props.bio}</p>
                            <p></p>
                        </div>
                    </div>)
            :(<div><i> Select a character</i></div>) 
    render = () => (
        <section id="bio">
             {this.content()}
         </section>
        )
}

