import PptxGenJS from 'pptxgenjs'

class ReportGenerator {
  generateReport(): void {
    const pptx = new PptxGenJS()

    // Add your PptxGenJS logic here
    const slide = pptx.addSlide()
    slide.addText('Hello World!', { x: 1, y: 1, w: 8, h: 2, fontSize: 24 })

    // Save the PowerPoint
    pptx.writeFile({ fileName: 'TestReport.pptx' })
  }
}

// Export an instance of ReportGenerator
export const reportGenerator = new ReportGenerator()
