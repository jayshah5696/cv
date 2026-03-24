from playwright.sync_api import sync_playwright
import time

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 375, "height": 812})  # Mobile viewport

    # Wait for the app to compile and load
    page.goto('http://localhost:3000', timeout=60000)
    page.wait_for_selector('p.print\\:hidden', timeout=10000)
    time.sleep(2)  # Give it a bit extra to ensure everything renders

    page.screenshot(path='before.png')
    print("Screenshot saved to before.png")
    browser.close()
