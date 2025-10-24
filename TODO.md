# Refactoring Plan for Admin Shop Angular Application

## 1. Fix Routing Structure
- [ ] Move routes from app.module.ts to app-routing.module.ts
- [ ] Add routes for product-list and order components
- [ ] Implement lazy loading for components

## 2. Refactor Service
- [ ] Add proper TypeScript types to all methods in products.service.ts
- [ ] Fix allOrder() method to use correct endpoint
- [ ] Rename service class consistently
- [ ] Add missing update method
- [ ] Add proper error handling

## 3. Improve Models
- [ ] Rename 'order' interface to 'Order' in order.ts
- [ ] Fix property types (prix: any to number)

## 4. Update Components
- [ ] Remove hardcoded values in add-product.component.ts
- [ ] Improve form handling and error management in add-product.component.ts
- [ ] Fix logic in order.component.ts (remove unused resultOrders)
- [ ] Add error handling to order.component.ts
- [ ] Fix equality check in product-list.component.ts (!= to !==)
- [ ] Add error handling to product-list.component.ts

## 5. Clean Up Module
- [ ] Remove duplicate routing imports from app.module.ts
- [ ] Organize imports properly in app.module.ts

## 6. Add Missing Constants
- [ ] Add orders endpoint to constants.ts

## 7. Implement Error Handling
- [ ] Add global error handling strategy
- [ ] Improve error messages in components

## Follow-up Steps
- [ ] Test application functionality
- [ ] Run unit tests
- [ ] Check for compilation errors
