import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    rows: [
        {
            title: "What do you charge for one federal and one state return?",
            content: 'We start our prices at $140, extra fees will apply for additional forms, please call for estimates.',
        },
        {
            title: "Can I drop my taxes off after regular business hours?",
            content: "Yes we have a mailbox out front with envelopes, inside envelopes are forms to fill out. If the forms are not fully filled out it can cause your tax return to be delayed. There is a slot next to the front door that comes in the building that you can drop them into. During business hours your documents can be dropped off in the building, please be respectful of our limited space as tax season is also cold, flu and covid season.",
        },
        {
            title: "How do I file an extension?",
            content: `Fill out our information sheet and email or drop off if you are new, previous clients give us a call.`,
        },
        {
            title: "When is the regular season tax deadline?",
            content: `Normal tax year is April 15th, however; tax season for the year 2022/2023 tax season is April 18, 2023 due to Federal holiday. `,
        },
        {
            title: "What are the benefits of filing an extension?",
            content: `It gives you more time, however: it only saves you the late filing fee. Interest and penalties for not paying by the April deadline will be owed at the time of filing. If you believe you will owe you can always send in payment with your extension in April and file later.`,
        },
        {
            title: "When is the deadline for extensions?",
            content: `October 15th is usually the date unless the IRS extends such as during the pandemic.`,
        },
        {
            title: "Why do I need to bring address verification for dependents?",
            content: `Per the IRS we as tax preparers have to do our due diligence for every return or we can face a fine if audited.`,
        },
        {
            title: "Do we file S-corps, partnerships or C-corps?",
            content: `We do not.`,
        },
        {
            title: "Do you do farms, business, rental tax forms?",
            content: `We do farm rentals and personal farm taxes. We also do sole proprietor business forms and personal residential rental tax forms. Call for estimates.`,
        },
        {
            title: "Are you a CPA and or do you do bookkeeping?",
            content: `We are not CPA's, we are tax preparers that specialize in personal tax returns. We also do not do bookkeeping but can refer you to one if needed.`,
        },
        {
            title: "Do you have a notary in the office?",
            content: `Yes and will be available year round, during peak tax season an appointment might need to be scheduled. Please call the office.`,
        },
        {
            title: "Can you file states other than Missouri?",
            content: `Yes we file all states, Charge for other states is 25 dollars per state.`,
        },

    ],
};

const config = {
    animate: true,
    tabFocus: true,
    expandIcon: "+",
    collapseIcon: "-",
};

const styles = {
    bgColor: 'transparent',
    titleTextColor: 'blue',
    // rowTitleColor: 'black',
    rowTitleTextSize: '20px',
    rowContentColor: 'black',
    rowContentTextSize: '16px',
    // rowContentPaddingTop: '10px',
    // rowContentPaddingBottom: '10px',
    // rowContentPaddingLeft: '50px',
    // rowContentPaddingRight: '150px',
    arrowColor: "green",
    transitionDuration: "1s",
    // timingFunc: "ease"
  }


const FAQ = () => {
  return (
    <div className='border-2 border-black w-5/6 m-auto faqBG' id="faq">
        <div className='text-center p-10 sm:p-2'>
            <h1 className="text-4xl sm:text-sm font-bold">Frequently Asked Questions</h1>
            <p className="p-5 sm:text-xs font-semibold">Below are some commonly asked questions that we get, if a question you have is not listed below feel free to contact us <a className="italic text-blue-700" href="TEL:816-690-7997">here</a></p>
            <Faq
            data={data}
            styles={styles}
            config={config}/>
        </div>
    </div>
  )
}

export default FAQ