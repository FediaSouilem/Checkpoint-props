import React from 'react';
import PropTypes from 'prop-types';

export const Profile = (props) => {
  return <div>
      <h1 style={{color:"red"}}> Hello my name is {props.name} and i'm a {props.profession}</h1>
      <h1> bio:{props.bio}</h1>
      <div> {props.children}</div>
      <button onClick={()=>props.alertmyinput('My name is Fedia')}> clickme</button>
  </div>;
};
Profile.propTypes ={
  name:PropTypes.string,
  profession:PropTypes.string,
  bio:PropTypes.string,
}
Profile.defaultProps={
  name:"Fedia SOUILEM"
}