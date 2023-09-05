# ABB-Trading
Selling Houseware and others!


## Reflowhq Documentation
```
https://reflowhq.com/docs/html-toolkit/
```

## Setup & Configuration

### 1. Create a Store
Signing up for Reflow and creating a store takes less than a minute. Sign up here.

### 2. Include the Library
To add Reflow to your website, you need to include the library JS and CSS files:

```
https://cdn.reflowhq.com/v2/toolkit.min.js
https://cdn.reflowhq.com/v2/toolkit.min.css
```

Add the CSS to the <head> of your pages, and the JS before the closing body tag:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Reflow Example</title>
    <link href="https://cdn.reflowhq.com/v2/toolkit.min.css" rel="stylesheet">
</head>
<body>
    <p>Your Content is Here</p>
    <script src="https://cdn.reflowhq.com/v2/toolkit.min.js" data-reflow-store="999999" defer></script>
</body>
</html>
```

##### Notice that the `<script>` tag has a `data-reflow-store` attribute. This tells Reflow the id of your store, and is required to render your products.

### 2.1 Obtain your Store ID
You can copy your store's id from the URL on the Reflow website after you login. In this example, `999999` is your store's ID:

`https://reflowhq.com/stores/999999`

Just go ahead and paste it as the value of the `data-reflow-store` attribute in the script tag.

#### CHECKING FOR ERRORS
If there are any errors, they will be reported in your browser's JS error console. Be sure to check Dev Tools for errors often during development.

### 3. Add a Product
At this point, Reflow is integrated in your website, but since you don't have any components, nothing will show up. To fix this, let's add a Product component.

Create a product in your store's control panel on reflowhq.com, open it for editing and copy its id from the URL:

`https://reflowhq.com/stores/999999/products/111111/edit`

In this example, `111111` is the id of your product. Keep it safe because we're going to need it in a second.

Now add a Product component to your page. Paste the id you copied as the data-reflow-product attribute, this will instruct Reflow which product to render:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Reflow Example</title>
    <link href="https://cdn.reflowhq.com/v2/toolkit.min.css" rel="stylesheet">
</head>
<body>
    <p>Your Content is Here</p>
    <div data-reflow-type="product" data-reflow-product="111111"></div>
    <script src="https://cdn.reflowhq.com/v2/toolkit.min.js" data-reflow-store="999999" defer></script>
</body>
</html>
```

#### You now have a full product listing on your page, complete with an image gallery and an Add to Cart button. But there is no way for users to actually view their cart or complete the purchase. Let's fix this.

### 4. Add a Shopping Cart
On another page of your website, add the Shopping Cart component. This will render a live shopping cart that lists all products that have been added and will let users to purchase them.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Reflow Example</title>
    <link href="https://cdn.reflowhq.com/v2/toolkit.min.css" rel="stylesheet">
</head>
<body>
    <div data-reflow-type="shopping-cart"></div>
    <script src="https://cdn.reflowhq.com/v2/toolkit.min.js" data-reflow-store="999999" defer></script>
</body>
</html>
```

With this your users can see a fully functional product page, add the product to their cart, enter their `shipping details` and `pay`, all with just a few HTML tags added to your site.

##### NOTE
For checkouts to work, you will need to connect a `PayPal` and/or `Stripe` account to your store, so that the payment can be processed. Read more in our guide.

### 5. Your Store is Ready!
The toolkit gives you a lot of control over how components are presented and you can customize them to meet your design. Learn more in our other guides.


### LICENSE
```
                                            MIT License

                                    Copyright (c) 2023 Alvin Berdandino

                Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the "Software"), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:

                The above copyright notice and this permission notice shall be included in all
                copies or substantial portions of the Software.

                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                SOFTWARE.

```