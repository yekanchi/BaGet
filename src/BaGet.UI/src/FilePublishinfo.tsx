import * as React from 'react';
import { lt, ltr } from 'semver';
import './FilePublishInfo.css'

class FilePublishinfo extends React.Component {
  public render() {
    return (
      <div className='file-publish-info alert alert-warning'>
        <p>علاوه بر امکان استفاده از روش های دیگر برای پابلیش کردن پکیج ها می توانید فایل های پکیج شده را در آدرس زیر کپی کنید:</p>
        <div className="file-publish-info-link ">
          <code>
            <a href="\\pc0235" >\\portalcore\packages\nuget</a>
          </code>
        </div>
        <p>چند ثانیه بعد از پابلیش شدن پکیج ها در آدرس فوق،‌فایل ها در این آدرس منتشر شده و از پوشه فوق حذف خواهند شد.</p>
      </div >
    );
  }
}

export default FilePublishinfo;
