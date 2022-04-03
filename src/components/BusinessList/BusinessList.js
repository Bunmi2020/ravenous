import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
    /* constructor(props) {
         super(props);
     } */

     //we pass each of the array member of business passed as an attribute of BusinessList component from App into Business compenent
     render() {
    
            return (
                <div className="BusinessList">
                    {
          this.props.businesses.map(business => {
            return <Business business={business} key={business.id}/>
          })
        }
                </div>
            );
    }
 }

 export default BusinessList;