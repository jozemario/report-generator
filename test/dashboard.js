require.config({
  paths: {
    myLibrary: '../app/splunk_assessment_framework/js/bundle',
    //myLibrary: '../dist/bundle',
  },
})

require(['myLibrary'], function (myLibrary) {
  const { PptxGenJS } = myLibrary
  console.log(myLibrary)
  var isProcessing = false
  var myButton = document.getElementById('exportAssesments')
  if (myButton) {
    myButton.addEventListener('click', async function (e) {
      const pptx = new PptxGenJS()
      const slide = pptx.addSlide()
      slide.addText('Hello World!', { x: 1, y: 1, w: 8, h: 2, fontSize: 24 })

      pptx.writeFile({ fileName: 'TestReport.pptx' })
    })
  }

  // Event listener for window beforeunload
  window.addEventListener('beforeunload', function (e) {
    if (isProcessing) {
      // Cancel the event
      e.preventDefault()

      // Chrome requires returnValue to be set
      e.returnValue = ''
    }
  })
})
