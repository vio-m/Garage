import styled from "styled-components";


function Faq() {
    const FaqWrapper = styled.section.attrs({
        id: 'faq'
      })`
    height: 100vh;
    background-color: white;
    padding: 20px;

    dd {
        margin-left: 20px;
        font-style: italic;
        color: #999;
      }
    `

    return (
        <FaqWrapper>
            <h2>Frequently Asked Questions</h2>

                <dt>Q: How often should I get my car serviced?</dt>
                <dd>Answer: It's recommended to get your car serviced every 6 months or 10,000 miles, whichever comes first. 
                    However, this can vary depending on the make and model of your car, as well as how often you drive it.
                    </dd>
            
            
            
                <dt>Q: Can you give me an estimate before you start working on my car?</dt>
                <dd>Answer: Yes, we can provide you with an estimate for any repairs or services before we start working on your car. 
                            We'll inspect your car and provide you with a detailed quote for the work that needs to be done.
                </dd>
            
            
                <dt>Q: Do you offer any warranties on your repairs?</dt>
                <dd>Answer: Yes, we offer warranties on all of our repairs. The length of the warranty will depend on the type of 
                            repair and the parts that we use. We stand behind our work and want to ensure that you're completely satisfied with the repairs we make.
                </dd>
            
                <dt>Q: What payment methods do you accept?</dt>
                <dd>Answer: We accept cash, credit cards, and debit cards. We also offer financing options for larger repairs or services.</dd>
            
            
                <dt>Q: Do you offer any discounts or promotions?</dt>
                <dd>Answer: Yes, we offer discounts and promotions throughout the year. Be sure to check our website or social media 
                            pages for the latest offers. We also offer a loyalty program for our regular customers that provides discounts on future services.</dd>
            

        </FaqWrapper>
    )
}

export default Faq