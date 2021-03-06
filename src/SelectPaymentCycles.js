/* Energi Proposal Creator
*
* The following JSON represents an Energi proposal object that can be submitted to the blockchain.
* The purpose of this app is to create and validate this data based on user input, and then prepare
* the commands a user would use to submit this object to the Energi blockchain.

[
   [
      "proposal",
      {
         "end_epoch":1521329930,
         "name":"TITLE",
         "payment_address":"someaddr",
         "payment_amount":1337,
         "start_epoch":1513603490,
         "type":1,
         "url":"https://example.com/title-proposal"
      }
   ]
]
*/

import React, { Component } from 'react';

class SelectPaymentCycles extends Component
{
  /*
  constructor(props)
  {
    super(props);
  }
  */

  getNumberOfPayments()
  {
    // there are 26.07 payment cycles annually for Energi
    const maximumNumberOfPaymentCycles = 26;

    let htmlOptionTags = [];
    for (let i = 1; i <= maximumNumberOfPaymentCycles; i++)
    {
      let paymentStr = 'Payments';
      if (i === 1) paymentStr = 'Payment';

      htmlOptionTags.push(<option value={i}>{i} {paymentStr}</option>);
    }
    return htmlOptionTags;
  }

  render()
  {
    let props = this.props;
    return (
      <div>
        <label>
          Payments:
          <select name="end_epoch" onChange={props.onChange}>
            { this.getNumberOfPayments() }
          </select>
        </label>
      </div>
    );
  }
}

export default SelectPaymentCycles;
