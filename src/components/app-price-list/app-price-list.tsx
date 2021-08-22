import { Component, h, ComponentInterface, Prop } from "@stencil/core";
import { RouterHistory } from "@stencil/router";

import { defaultPageMetaDescription } from "../../global/site-structure-utils";
import { registerViewWithTracking } from "../../global/services/helper.utils";

@Component({
  tag: "app-price-list",
  styleUrl: "app-price-list.css",
  shadow: true,
})
export class AppPriceList implements ComponentInterface {
  private pageMetaDescription = defaultPageMetaDescription;

  @Prop() history: RouterHistory;

  constructor() {
    document.title = `Treatment price list for New You Medispa`;
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", this.pageMetaDescription);
  }

  componentDidLoad() {
    registerViewWithTracking(this.history.location.pathname);
  }

  render() {
    return (
      <div>
        <h1>Treatment Price List</h1>
        <br />

        <table>
          <tbody>
            <tr>
              <th style={{ width: "50%;" }}>Treatment</th>
              <th style={{ width: "30%" }}>Areas</th>
              <th class="text-right" style={{ width: "20%;" }}>
                Price
              </th>
            </tr>
            <tr>
              <td colSpan={2}>IPL hair removal, facial vein and pigmentation removal </td>
              <td class="text-right">
                <span class="from">coming soon!</span>
              </td>
            </tr>
            <tr>
              <td rowSpan={3}>Muscle relaxing injections</td>
              <td class="text-center">1 area</td>
              <td class="text-right">£90.00</td>
            </tr>
            <tr>
              <td class="text-center">2 areas</td>
              <td class="text-right">£180.00</td>
            </tr>
            <tr>
              <td class="text-center">3 areas</td>
              <td class="text-right">£200.00</td>
            </tr>
            <tr>
              <td colSpan={2}>profhlio</td>
              <td class="text-right">
              <span class="from">from</span> £200.00
              </td>
            </tr>
            <tr>
              <td colSpan={2}>lip augmentation</td>
              <td class="text-right">
              <span class="from">from</span> £150.00
              </td>
            </tr>
            <tr>
              <td colSpan={2}>dermal fillers</td>
              <td class="text-right">
                <span class="from">from</span> £150.00
              </td>
            </tr>
            <tr>
              <td colSpan={2}>dermaroller with mesotherapy</td>
              <td class="text-right">£130.00</td>
            </tr>
            <tr>
              <td colSpan={2}>perfect peel</td>
              <td class="text-right">£250.00</td>
            </tr>
            <tr>
              <td colSpan={2}>glycolic skin peel</td>
              <td class="text-right">£25.00</td>
            </tr>
            <tr>
              <td colSpan={2}>dermalux LED phototherapy</td>
              <td class="text-right">£35.00</td>
            </tr>
            <tr>
              <td colSpan={2}>dermaplane</td>
              <td class="text-right">£25.00</td>
            </tr>
            <tr>
              <td colSpan={2}>plasma treatment</td>
              <td class="text-right">
              <span class="from">from</span> £50.00</td>
            </tr>
            <tr>
              <td colSpan={3}>&nbsp;</td>
            </tr>
            <tr>
              <td rowSpan={3}>endymed 3deep radiofrequency (RF)</td>
              <td class="text-center">1 area (course of 6)</td>
              <td class="text-right">£500.00</td>
            </tr>
            <tr>
              <td class="text-center">2 areas (course of 6)</td>
              <td class="text-right">£900.00</td>
            </tr>
            <tr>
              <td colSpan={3}>&nbsp;</td>
            </tr>
            <tr>
              <td>high intensity focused ultrasound (HIFU)</td>
              <td class="text-center">1 area (course of 3)</td>
              <td class="text-right">
                <span class="from">from</span> £300.00
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
