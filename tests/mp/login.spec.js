import { test, expect } from '@playwright/test';
import {LoginPage} from '../../pages/login'

test('test', async ({ page }) => {
  const Login = new LoginPage(page)
  await Login.gotoLoginPage()
  await Login.login('test.villa@meetingpackage.com','meetingpackage')
  //await page.goto('https://dev.meetingpackage.com/user/login');
  //await page.getByPlaceholder('E-mail or username *').click();
  //await page.getByPlaceholder('E-mail or username *').fill('test.villa@meetingpackage.com');
  //await page.getByPlaceholder('Password *').click();
  //await page.getByPlaceholder('Password *').fill('meetingpackage');
  //await page.getByRole('button', { name: 'Log in' }).click();
});