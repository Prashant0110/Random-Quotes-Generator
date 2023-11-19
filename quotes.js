const newQuoteButton=document.querySelector('#js-new-quote');
const quoteText=document.querySelector('.quote-text');
const Spinner=document.querySelector('#js-spinner');


newQuoteButton.addEventListener('click',getQuote);



async function getQuote()
{
    Spinner.classList.remove('hidden');
    newQuoteButton.disabled=true;
    const endpoint='https://api.whatdoestrumpthink.com/api/v1/quotes/random'
    try{
        const response=await fetch(endpoint);
        if(!response)
        {
            throw new Error(response.statusText);
        }

        const json=await response.json();
        console.log(json.message);



        //update to dom 
        const newquote=json.message;
        quoteText.innerText=newquote;
        
    }

    catch(err)
    {
        console.log(err);
        alert('fail to fetch data');
    }

    finally
    {
        Spinner.classList.add('hidden');
        newQuoteButton.disabled=false;
    }
}


