import React, { useState, useEffect } from 'react';

import history from "./../history";

const Payment = function  () {


    return (
        <div className='temp-bg' onClick={() => history.push('/payment') }>

        </div>
    );
}

export default Payment;