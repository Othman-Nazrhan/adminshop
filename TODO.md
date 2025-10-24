# TODO: Implement Edit Product Functionality

## Steps to Complete

1. **Add Edit Button to Product List**
   - Update `src/app/components/product-list/product-list.component.html` to include an Edit button in the Actions column that navigates to `/edit-product/:id`.

2. **Add Route for Edit Product**
   - Update `src/app/app-routing.module.ts` to add a route for `edit-product/:id` pointing to `EditProductComponent`.

3. **Implement Edit Product Component Logic**
   - Update `src/app/components/edit-product/edit-product.component.ts`:
     - Import `ActivatedRoute`, `Router`, `FormControl`, `FormGroup`, `Validators`.
     - Inject `ActivatedRoute`, `ProductService`, `Router`.
     - Create a form group similar to add-product.
     - In `ngOnInit`, get product ID from route params, load product data, populate form.
     - Add `update()` method to handle form submission, call service update, navigate back to product list.

4. **Update Edit Product Template**
   - Update `src/app/components/edit-product/edit-product.component.html` with a form similar to add-product, but pre-populated with product data and submit button says "Update Product".

5. **Test the Edit Functionality**
   - Run the app and verify that editing a product works: loads data, updates on submit, redirects to list.
