import puppeteer from 'puppeteer'

const { NODE_ENV, HRMS_URL, HRMS_USERNAME, HRMS_PASSWORD } = process.env

;(async () => {
  try {
    const browser = await puppeteer.launch({ headless: NODE_ENV === 'production' })
    const page = await browser.newPage()
    await page.goto(HRMS_URL)
    await page.waitForSelector('#form1')
    await page.type('#txtUserName', HRMS_USERNAME)
    await page.type('#txtPassword', HRMS_PASSWORD)
    await page.click('#btnLogin')
    await page.waitForSelector('#ctl00_HeaderCtl1_rptMainMenu_ctl08_rpt1_ctl00_HyperLink1')
    await page.click('#ctl00_HeaderCtl1_rptMainMenu_ctl08_rpt1_ctl00_HyperLink1')

    // await browser.close()
  } catch (error) {
    console.error(error)
  }
})()
