import React from 'react';
import Sidebar from './slidebar';
import Header from './header';
import Footer from './footer';
import Validate from './../../helpers/Validate';
function main(props) {
  return (
    <div>
      <Validate/>
      <div>
        <Sidebar />
        <div className="c-wrapper c-fixed-components">
          <Header />
          <div className="c-body">
            <main className="c-main">
              <div className="container-fluid">
                {props.children}
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </div>

    </div>
  );
}

export default main;