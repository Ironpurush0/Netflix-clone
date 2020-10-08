import React from 'react'
import faqData from '../fixtures/faqs.json'
import Accordian from '../components/Accordian'

const FaqsContainer = () => {
    return (
        <Accordian>
            <Accordian.Title>Frequently Asked Questions</Accordian.Title>
            {faqData.map(item => (
                <Accordian.Item key={item.id}>
                    <Accordian.Header>{item.header}</Accordian.Header>
            <Accordian.Body>{item.body}</Accordian.Body>
                </Accordian.Item>
            ))}
        </Accordian>
    )
}

export default FaqsContainer
