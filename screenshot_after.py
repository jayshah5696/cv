from playwright.sync_api import sync_playwright
import time

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 375, "height": 812})  # Mobile viewport

    # Wait for the app to compile and load
    page.goto('http://localhost:3000', timeout=60000)
    page.wait_for_selector('button.print\\:hidden', timeout=10000)

    # Take an unfocused screenshot
    time.sleep(2)
    page.screenshot(path='after.png')

    # Focus the button and take a screenshot to verify focus states
    page.locator('button.print\\:hidden').focus()
    time.sleep(1)
    page.screenshot(path='after_focused.png')

    print("Screenshots saved to after.png and after_focused.png")
    browser.close()
