/* eslint-disable max-len */
import { CmsPage as SourceCmsPage } from 'SourceRoute/CmsPage/CmsPage.component';

import './CmsPage.extension.style.scss';

/** @namespace CmsPage/Route/CmsPage/Component/CmsContent */
export function CmsContent() {
    return (
        <div className="cms-page">
            <section className="courier">
                    <h3 className="section-title">Courier Delivery Service</h3>
                    <div className="section-content truck-flex">
                        <div className="truck-img" />

                        <p className="section-description">
                        JYSK.lv uses Purolator to deliver soft goods (ex. Bedding, Home Décor, Bath Products). It is important that you provide correct address information. If after three failed attempts of delivering your products, it will be held at your closest Purolator depot for two weeks for pick up. If your order is not picked up, it will be returned to the JYSK store that sent the product out. At this point, a refund will be given to you for only the products.
                        <br />
                        { ' ' }
                        <br />
                        You will receive a shipment email with a Purolator tracking number once your order is ready for delivery. You will be able to start tracking your order at
{ ' ' }
<a href="http://www.purolator.com">http://www.purolator.com</a>
{ ' ' }
once Purolator picks up the products from the JYSK store.
                        </p>
                    </div>
            </section>

            <section className="local">
                <h3 className="section-title">Local Delivery Service</h3>
                <p className="section-description">
                JYSK.lv uses 3rd party delivery companies to send furniture and mattress products. All deliveries will be a two man service and will be either first-point-of-entry or any room in the house depending on location.
                </p>

                <ul className="local__bullet-list">
                    <li><p>The best shipping company in the world</p></li>
                    <li><p>Another bullet point outlining the good local deliveries</p></li>
                    <li><p>The third bullet point example</p></li>
                </ul>

                <div className="section-content">
                    <div className="col">
                        <div className="info-card">
                            <div className="icon mail" />
                            <div>
                                <h4 className="card-title">SANEM</h4>
                                <p className="card-description">
                                Saņem reģistrācijas apstiprinājumu un atlaides kodu uz e-pastu.
                                </p>
                            </div>
                        </div>
                        <div className="info-card">
                            <div className="icon trash" />
                            <div>
                                <h4 className="card-title">SANEM</h4>
                                <p className="card-description">
                                Saņem reģistrācijas apstiprinājumu un atlaides kodu uz e-pastu.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col flex">
                        <div className="info-card">
                            <div className="icon mail" />
                            <div className="card-text">
                                <h4 className="card-title">SANEM ATLAIDES KODU</h4>
                                <p className="card-description">
                                Saņem reģistrācijas apstiprinājumu un atlaides kodu uz e-pastu.
                                </p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="icon trash" />
                            <div className="card-text">
                                <h4 className="card-title">SANEM ATLAIDES KODU</h4>
                                <p className="card-description">
                                Saņem reģistrācijas apstiprinājumu un atlaides kodu uz e-pastu.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="half-columns">
                <div className="half-col">
                    <h3 className="section-title">Half column content</h3>
                    <p className="section-description">
                    JYSK.lv uses Purolator to deliver soft goods (ex. Bedding, Home Décor, Bath Products). It is important that you provide correct address information. If after three failed attempts of delivering your products, it will be held at your closest Purolator depot for two weeks for pick up. If your order is not picked up, it will be returned to the JYSK store that sent the product out. At this point, a refund will be given to you for only the products.
                    <br />
<br />
                    You will receive a shipment email with a Purolator tracking number once your order is ready for delivery. You will be able to start tracking your order at
{ ' ' }
<a href="http://www.purolator.com">http://www.purolator.com</a>
{ ' ' }
once Purolator picks up the products from the JYSK store.
                    </p>
                </div>

                <div className="half-col">
                    <h3 className="section-title">Half column content</h3>
                    <p className="section-description">
                    JYSK.lv uses Purolator to deliver soft goods (ex. Bedding, Home Décor, Bath Products). It is important that you provide correct address information. If after three failed attempts of delivering your products, it will be held at your closest Purolator depot for two weeks for pick up. If your order is not picked up, it will be returned to the JYSK store that sent the product out. At this point, a refund will be given to you for only the products.
                    <br />
<br />
                    You will receive a shipment email with a Purolator tracking number once your order is ready for delivery. You will be able to start tracking your order at
{ ' ' }
<a href="http://www.purolator.com">http://www.purolator.com</a>
{ ' ' }
once Purolator picks up the products from the JYSK store.
                    </p>
                </div>
            </section>

            <section className="local-2">
                <h3 className="section-title">Local Delivery Service</h3>
                <h3 className="section-subtitle">HEADING 2 SUBTITLE</h3>

                <p className="section-description">
                JYSK.lv uses 3rd party delivery companies to send furniture and mattress products. All deliveries will be a two man service and will be either first-point-of-entry or any room in the house depending on location.
                </p>

                <div className="table-phone">
                    <table>
                        <tr className="table-row">
                            <th id="center" colSpan="2">A TABLE EXAMPLE COLUMN 1</th>
                        </tr>
                        <tr>
                            <td id="center">Row title in two lines lorem ipsum</td>
                            <td id="center">Some text aligned in center of cell</td>
                        </tr>
                        <tr>
                            <td id="center">Small row title</td>
                            <td id="center">Lorem Ipsum dolor jysk amet</td>
                        </tr>
                        <tr>
                            <td id="center">Small row title</td>
                            <td id="center">Lorem Ipsum dolor jysk amet</td>
                        </tr>
                        <tr>
                            <td id="center">Row title in three long lines to show fluidity</td>
                            <td id="center">Two lines content can go there</td>
                        </tr>
                    </table>

                    <table>
                        <tr>
                            <th id="center" colSpan="2">ANOTHER COLUMN</th>
                        </tr>
                        <tr>
                            <td id="center">Row title in two lines lorem ipsum</td>
                            <td id="center">Second row example</td>
                        </tr>
                        <tr>
                            <td id="center">Small row title</td>
                            <td id="center">Consectuam</td>
                        </tr>
                        <tr>
                            <td id="center">Small row title</td>
                            <td id="center">
<img src="img/checkmark-icon.svg" className="checkmark" />
{ ' ' }
Yes
                            </td>
                        </tr>
                        <tr>
                            <td id="center">Row title in three long lines to show fluidity</td>
                            <td id="center">Numbers of row is unlimited, and the content will stretch according to it</td>
                        </tr>
                    </table>

                    <table>
                        <tr>
                            <th id="center" colSpan="2">ANOTHER COLUMN</th>
                        </tr>
                        <tr>
                            <td id="center">Row title in two lines lorem ipsum</td>
                            <td id="center">Last column row</td>
                        </tr>
                        <tr>
                            <td id="center">Small row title</td>
                            <td id="center">
<img src="img/checkmark-icon.svg" className="checkmark" />
{ ' ' }
Integrated
                            </td>
                        </tr>
                        <tr>
                            <td id="center">Small row title</td>
                            <td id="center">This was an empty cell</td>
                        </tr>
                        <tr>
                            <td id="center">Row title in three long lines to show fluidity</td>
                            <td id="center">Two lines content can go there</td>
                        </tr>
                    </table>
                </div>

                <div className="table-normal">
                    <table>
                        <tr>
                            <th id="center" />
                            <th id="center">A TABLE EXAMPLE COLUMN 1</th>
                            <th id="center">ANOTHER COLUMN</th>
                            <th id="center">ANOTHER COLUMN</th>
                        </tr>

                        <tr>
                            <td id="center">Row title in two lines lorem ipsum</td>
                            <td id="center">Some text aligned in center of cell</td>
                            <td id="center">Second row example</td>
                            <td id="center">Last column row</td>
                        </tr>

                        <tr>
                            <td id="center">Small row title</td>
                            <td id="center">Lorem Ipsum dolor jysk amet</td>
                            <td id="center">Consectuam</td>
                            <td id="center">
<img src="img/checkmark-icon.svg" className="checkmark" />
{ ' ' }
Integrated
                            </td>
                        </tr>
                        <tr>
                            <td id="center">Small row title</td>
                            <td id="center">Lorem Ipsum dolor jysk amet</td>
                            <td id="center">
<img src="img/checkmark-icon.svg" className="checkmark" />
{ ' ' }
Yes
                            </td>
                            <td id="center">This was an empty cell</td>
                        </tr>
                        <tr>
                            <td id="center">Row title in three long lines to show fluidity</td>
                            <td id="center">Two lines content can go there</td>
                            <td id="center">Numbers of row is unlimited, and the content will stretch according to it</td>
                            <td id="center">Two lines content can go there</td>
                        </tr>
                    </table>
                </div>
            </section>
        </div>
    );
}

/** @namespace CmsPage/Route/CmsPage/Component */
export class CmsPageComponent extends SourceCmsPage {
    renderContent() {
        return (
            <CmsContent key="cms-content" />
        );
    }
}

export default CmsPageComponent;
