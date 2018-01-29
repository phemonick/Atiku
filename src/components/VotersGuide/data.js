import {Image } from 'react-native';
import React from 'react'
export const data = [
    {
        topic: "WHAT IS PERMANENT VOTERS’ CARD (PVC)?",
        content: "The Permanent Voters’ Card (PVC) is a smart card-based (like your ATM card) Voter ID, which holds voter’s information such as bio-data, biometrics and passport photograph. The card technology provides adequate security features to reduce vulnerability to counterfeiting. It will be used for identification and authentication of voters during elections, starting from 2015.",
        img: <Image source = {require('../../logo/pvc.png')} />,
        step : "STEP 1"
    },
    {
        topic: "AM I ELIGIBLE TO COLLECT PERMANENT VOTERS’ CARD (PVC)?",
        content: "The Independent National Electoral Commission (INEC) has stated that for you to get your PVC, you must: have registered before, have your name on the voters’ register, have a temporary voter card (TVC), have your identity confirmed if you have lost your TVC and be physically present at the collection centre to get your PVC.",
        img: <Image source = {require('../../logo/eligible.jpg')} />,
        step : "STEP 2"
    },
    {
        topic: "WHERE DO I COLLECT MY PVC?",
        content: "The distribution of the PVC will be at Polling Units (PU) spread across the state between the hours of 8:00am and 4:00pm. Those who are unable to collect theirs during the specified period can do so at the INEC office in their local government area (LGA) afterwards.",
        img: <Image source = {require('../../logo/location.jpg')} />,
        step : "STEP 3"
    }

]