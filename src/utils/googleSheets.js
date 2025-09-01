const SHEET_ID = '14XJwS_x8fxu_BtkbJ7f0CnSTno8bAiIVpM40zQDrINk';

export const submitToGoogleSheet = async (data, sheetName) => {
  try {
    const params = new URLSearchParams({
      sheetName,
      timestamp: new Date().toLocaleString(),
      ...data
    });
    
    const response = await fetch(`https://script.google.com/macros/s/AKfycbzUaahswhibhBGZSYrFvIGy4_4pBhtutZLhCEtCz04DSWD6f5LXgbHz0ood8F50ZyHX/exec?${params}`, {
      method: 'GET',
      mode: 'no-cors'
    });
    
    return { success: true };
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return { success: false, error: error.message };
  }
};