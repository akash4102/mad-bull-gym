import React from 'react'
import '../Styles/Maps.css'
const Location = () => {
  return (
    <div>
        <div className="mapouter">
            <div className="gmap_canvas">
                <iframe className="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="MAP" src="https://maps.google.com/maps?width=2048&amp;height=400&amp;hl=en&amp;q=4338, Padam Singh Rd, Block 29, Block 1, Regar Pura, Karol Bagh, New Delhi, Delhi 110005&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                </iframe>
                <a href="https://pdflist.com/" alt="pdflist.com">Pdflist.com</a>
            </div>
        </div>
    </div>
  )
}

export default Location