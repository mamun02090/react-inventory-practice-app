import { useEffect, useState, useMemo } from "react";

export default function UseData(){
    const [data, setData]= useState([]);
    const listData=useMemo(()=>[
        
            
            {
                date: '11 Nov 2021',
                title: 'Hammer',
                details: 'This is a Hammer to do work with',
                status: 'Alright',
                quantity: '200',
                stock: '300',
                unitPrice: '$10',
                amount: 2000.00
            },
            {
                date: '11 Nov 2021',
                title: 'Hammer',
                details: 'This is a Screw to do work with',
                status: 'Alright',
                quantity: '122',
                stock: '300',
                unitPrice: '$10',
                amount: 1220.00
            },
            {
                date: '11 Nov 2021',
                title: 'Hammer',
                details: 'Wood Plan will be used to do work with',
                status: 'In Progress',
                quantity: '200',
                stock: '200',
                unitPrice: '$10',
                amount: 2000.00
            },
            {
                date: '11 Nov 2021',
                title: 'Hammer',
                details: '-',
                status: 'Out of Stock',
                quantity: '0',
                stock: '200',               
                unitPrice: '$10',
                amount: 0.00
            },
            {
                date: '11 Nov 2021',
                title: 'Hammer',
                details: '-',
                status: 'Out of Stock',
                quantity: '0',
                stock: '200',               
                unitPrice: '$10',
                amount: 0.00
            },
            {
                date: '11 Nov 2021',
                title: 'Hammer',
                details: '-',
                status: 'Out of Stock',
                quantity: '0',
                stock: '200',               
                unitPrice: '$10',
                amount: 0.00
            },
            {
                date: '11 Nov 2021',
                title: 'Hammer',
                details: 'This is a Hammer to do work with',
                status: 'Alright',
                quantity: '200',
                stock: '300',
                unitPrice: '$10',
                amount: 2000.00
            },
            {
                date: '11 Nov 2021',
                title: 'Hammer',
                details: 'This is a Screw to do work with',
                status: 'Alright',
                quantity: '122',
                stock: '300',
                unitPrice: '$10',
                amount: 1220.00
            },
            {
                date: '11 Nov 2021',
                title: 'Hammer',
                details: 'Wood Plan will be used to do work with',
                status: 'In Progress',
                quantity: '200',
                stock: '200',
                unitPrice: '$10',
                amount: 2000.00
            },
    ], [])

    useEffect((()=>{
        
        if(listData!=null){
            
            setData(listData)
        }
    
    }), [listData]);
    return {
        data
    }
}