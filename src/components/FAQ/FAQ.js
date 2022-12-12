import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    rows: [
        {
            title: "What do you charge for one federal and one state return?",
            content: 'We start our prices at 140 dollars, extra fees will apply additional forms, call for estimates.',
        },
        {
            title: "Can I drop off my taxes during and after hours?",
            content: "Yes we have a mailbox out front with envelopes, inside envelopes are forms to fill out. If the forms are not fully filled out it can cause your tax return to be delayed. There is a slot next to the front door that comes in the building that you can drop them into. During business hours your documents can be dropped off in the building, please be respectful of our limited space as tax season is also cold, flu and covid season.",
        },
        {
            title: "How can you file an extension?",
            content: `Fill out our information sheet and email or drop off if you are new, previous clients give us a call.`,
        },
        {
            title: "When is the regular season tax deadline?",
            content: `Normal tax year is April 15th, however; tax season for the year 2022/2023 tax season is April 18, 2023 due to Federal holiday. `,
        },
        {
            title: "When is the deadline for extensions?",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
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
            title: "Where is my local IRS office and phone number?",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
        },
        {
            title: "Why did I get a letter asking me to apply for an ID protection pin number?",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
        },
        {
            title: "Do you do small business taxes, sole proprietor??",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
        },
        {
            title: "Do you do farms, business, rental tax forms?",
            content: `We do farm rentals and personal farm taxes. We also do sole proprietor business forms and personal residential rental tax forms. Call for estimates.`,
        },
        {
            title: "Do we do residential rental taxes?",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
        },
        {
            title: "Are you a CPA?",
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
    // arrowColor: "red",
    //transitionDuration: "1s",
    // timingFunc: "ease"
  }


const FAQ = () => {
  return (
    <div className='text-center' id="faq">
        <div className='text-center m-10'>
            <h1 className="pt-10 text-4xl">Frequently Asked Questions</h1>
            <Faq
            data={data}
            styles={styles}
            config={config}/>
        </div>
    </div>
  )
}

export default FAQ