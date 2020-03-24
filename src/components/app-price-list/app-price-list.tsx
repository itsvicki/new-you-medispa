import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-price-list',
  styleUrl: 'app-price-list.css',
  shadow: true
})
export class AppPriceList {

  render() {
    return (
      <div>
        <h2>Treatment Price List</h2>

        {/* <table>
          <tbody>
            <tr>
              <th style="width: 50%;">Treatment</th>
              <th style="width: 30%">Areas</th>
              <th class="priceColumn" style="width: 20%;">Price</th>
            </tr>
            <tr>
              <td>Muscle relaxing injections</td>
              <td class="textCenter">1 area</td>
              <td class="textRight">£90.00</td>
            </tr>
            <tr>
              <td class="textCenter">2 areas</td>
              <td class="textRight">£180.00</td>
            </tr>
            <tr>   
              <td class="textCenter">3 areas</td>
              <td class="textRight">£200.00</td>
            </tr>
            <tr>
              <td>juvéderm volbella lip filler</td>
              <td class="textRight">£250.00</td>
            </tr>
            <tr>
              <td>dermal fillers</td>
              <td class="textRight"><span class="from">from</span> £180.00</td>
            </tr>
            <tr>
              <td>dermaroller with mesotherapy</td>
              <td class="textRight">£130.00</td>
            </tr>
            <tr>
              <td>tca peel</td>
              <td class="textRight">£150.00</td>
            </tr>
            <tr>
              <td>glycolic skin peel</td>
              <td class="textRight">£20.00</td>
            </tr>
            <tr>
              <td>dermalux LED phototherapy</td>
              <td class="textRight">£35.00</td>
            </tr>
            <tr>
              <td>3D lipomed</td>
              <td class="textRight"><span class="from">from</span> £85.00</td>
            </tr>

          <tr><td colspan="3">&nbsp;</td></tr>

            <tr>
              <td class="header" colspan="3">endymed 3deep</td>
            </tr>
            <tr>
              <td class="subHeader" colspan="3">course of 6</td>
            </tr>
            <tr>
              <td rowspan="3">radiofrequency (RF)</td>
              <td class="textCenter">1 area</td>
              <td class="textRight">£500.00</td>
            </tr>
            <tr>
              <td class="textCenter">2 areas</td>
              <td class="textRight">£900.00</td>
            </tr>
            <tr>
              <td class="textCenter">individual/topup treatment</td>
              <td class="textRight">£100.00</td>
            </tr>

            <tr>
              <td class="subHeader" colspan="3">course of 3</td>
            </tr>
            <tr>
              <td rowspan="2">fractional skin resurfacing (FSR)</td>
              <td class="textCenter">1 area</td>
              <td class="textRight">£700.00</td>
            </tr>
            <tr>
              <td class="textCenter">2 area</td>
              <td class="textRight">£120.00</td>
            </tr>
            <tr>
              <td>FSR + RF</td>
              <td class="textCenter">1 area</td>
              <td class="textRight">£1100.00</td>
            </tr>
          </tbody>
        </table> */}
      </div>
    );
  }
}
