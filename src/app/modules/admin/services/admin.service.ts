import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const API = 'https://peaceful-beyond-74495.herokuapp.com';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private ADMIN_API = `${API}/admin`;
  sellerId!: number;

  constructor(private httpClient: HttpClient) {}

  // ## PRODUCTS
  // view product
  viewProduct(id: string): Observable<any> {
    return this.httpClient
      .get(this.ADMIN_API + 'sellers/' + this.sellerId + '/products' + id)
      .pipe(catchError(this.handleError));
  }

  // view products
  viewProducts(): Observable<any> {
    return this.httpClient
      .get(this.ADMIN_API + '/products')
      .pipe(catchError(this.handleError));
  }

  // create a product
  createProduct(product: any): Observable<any> {
    return this.httpClient
      .post(this.ADMIN_API + 'products', product)
      .pipe(catchError(this.handleError));
  }

  // edit a product
  editProduct(id: string, product: any): Observable<any> {
    return this.httpClient
      .patch(
        this.ADMIN_API + 'sellers' + this.sellerId + 'products/' + id,
        product
      )
      .pipe(catchError(this.handleError));
  }

  // delete product
  deleteProduct(id: string): Observable<any> {
    return this.httpClient
      .delete(this.ADMIN_API + '/products' + id)
      .pipe(catchError(this.handleError));
  }

  // ## SHIPPING DETAILS
  // view all shipping details
  viewAllShippingDetails(): Observable<any> {
    return this.httpClient
      .get(this.ADMIN_API + '/users' + '/shippingDetails')
      .pipe(catchError(this.handleError));
  }

  // create shipping detail
  createShippingDetail(detail: any): Observable<any> {
    return this.httpClient
      .post(this.ADMIN_API + '/users' + '/shippingDetails', detail)
      .pipe(catchError(this.handleError));
  }

  // edit shipping detail
  editShippingDetails(id: string, detail: any): Observable<any> {
    return this.httpClient
      .patch(this.ADMIN_API + '/users' + '/shippingDetails' + id, detail)
      .pipe(catchError(this.handleError));
  }

  // delete shipping detail
  deleteShippingDetail(id: string): Observable<any> {
    return this.httpClient
      .delete(this.ADMIN_API + '/users' + '/shippingDetails')
      .pipe(catchError(this.handleError));
  }

  // TODO ##-> CART ITEMS

  // ## ORDERS

  // view all orders
  viewAllOrders(): Observable<any> {
    return this.httpClient
      .get(this.ADMIN_API + '/users/427/orders')
      .pipe(catchError(this.handleError));
  }

  // view order
  viewOrder(id: string): Observable<any> {
    return this.httpClient
      .get(this.ADMIN_API + '/users/33/orders/' + id)
      .pipe(catchError(this.handleError));
  }

  // edit order
  editOrder(id: string, detail: any): Observable<any> {
    return this.httpClient
      .patch(this.ADMIN_API + '/users/33/orders/' + id, detail)
      .pipe(catchError(this.handleError));
  }

  // delete order
  deleteOrder(id: string): Observable<any> {
    return this.httpClient
      .delete(this.ADMIN_API + '/orders/' + id + 'forceDestroy')
      .pipe(catchError(this.handleError));
  }

  // ## PRODUCT CATEGORY MANAGEMENT

  // create product category - top level
  createTopCategory(category: any): Observable<any> {
    return this.httpClient
      .post(this.ADMIN_API + '/productCategories', category)
      .pipe(catchError(this.handleError));
  }

  // create product category - sub level
  createSubCategory(category: any): Observable<any> {
    return this.httpClient
      .post(this.ADMIN_API + '/productCategories', category)
      .pipe(catchError(this.handleError));
  }

  // edit product category - top level
  editTopCategory(id: string, category: any): Observable<any> {
    return this.httpClient
      .patch(this.ADMIN_API + '/productCategories/' + id, category)
      .pipe(catchError(this.handleError));
  }

  // edit product category - sub level
  editSubCategory(id: string, category: any): Observable<any> {
    return this.httpClient
      .patch(this.ADMIN_API + '/productCategories/' + id, category)
      .pipe(catchError(this.handleError));
  }

  // view a product category
  viewCategory(id: string): Observable<any> {
    return this.httpClient
      .get(this.ADMIN_API + '/productCategories/' + id)
      .pipe(catchError(this.handleError));
  }

  // view all product categories
  viewCategories(): Observable<any> {
    return this.httpClient
      .get(this.ADMIN_API + '/productCategories')
      .pipe(catchError(this.handleError));
  }

  // delete category
  deleteCategory(id: string): Observable<any> {
    return this.httpClient
      .delete(this.ADMIN_API + '/productCategories/' + id)
      .pipe(catchError(this.handleError));
  }

  // SUB LEVEL CATEGORY

  // view all sub level categories
  viewSubCategories(productCategoryId: string): Observable<any> {
    return this.httpClient
      .get(
        this.ADMIN_API +
          '/productCategories/' +
          productCategoryId +
          '/subCategories'
      )
      .pipe(catchError(this.handleError));
  }

  // view a sub level category
  viewSubCategory(
    productCategoryId: string,
    subProductCategoryId: string
  ): Observable<any> {
    return this.httpClient
      .get(
        this.ADMIN_API +
          '/productCategories/' +
          productCategoryId +
          '/subCategories/' +
          subProductCategoryId
      )
      .pipe(catchError(this.handleError));
  }

  // delete a sub level category
  deleteSubCategory(
    productCategoryId: string,
    subProductCategoryId: string
  ): Observable<any> {
    return this.httpClient
      .delete(
        this.ADMIN_API +
          '/productCategories/' +
          productCategoryId +
          '/subcategories/' +
          subProductCategoryId
      )
      .pipe(catchError(this.handleError));
  }

  // ### PRODUCT IMAGES MANAGEMENT

  // edit product image
  editProductImage(id: string, image: any): Observable<any> {
    return this.httpClient
      .post(
        this.ADMIN_API + '/sellers/' + this.sellerId + 'products/' + id,
        image
      )
      .pipe(catchError(this.handleError));
  }

  // delete product image
  deleteProductImage(id: string): Observable<any> {
    return this.httpClient
      .delete(this.ADMIN_API + '/sellers/' + this.sellerId + '/products/' + id)
      .pipe(catchError(this.handleError));
  }

  // ### USER MANAGEMENT

  // create new user
  createUser(user: any): Observable<any> {
    return this.httpClient
      .post(this.ADMIN_API + '/users', user)
      .pipe(catchError(this.handleError));
  }

  // view a user
  viewUser(id: string): Observable<any> {
    return this.httpClient
      .get(this.ADMIN_API + '/users/' + id)
      .pipe(catchError(this.handleError));
  }

  // view all users
  viewAllUsers(): Observable<any> {
    return this.httpClient
      .get(this.ADMIN_API + '/users')
      .pipe(catchError(this.handleError));
  }

  // edit a user
  deleteUser(id: string, user: any): Observable<any> {
    return this.httpClient
      .patch(this.ADMIN_API + '/users/' + id, user)
      .pipe(catchError(this.handleError));
  }

  // edit user password
  editUserPassword(userId: string, password: any) {
    return this.httpClient
      .patch(this.ADMIN_API + '/users/' + userId + '/update-password', password)
      .pipe(catchError(this.handleError));
  }

  // ### ADMIN MANAGEMENT

  // view an admin
  viewAdmin(adminId: string): Observable<any> {
    return this.httpClient
      .get(this.ADMIN_API + '/admins/' + adminId)
      .pipe(catchError(this.handleError));
  }

  // view all admins
  viewAllAdmins(): Observable<any> {
    return this.httpClient
      .get(this.ADMIN_API + '/admins')
      .pipe(catchError(this.handleError));
  }

  // create new admin
  createAdmin(admin: any): Observable<any> {
    return this.httpClient
      .post(this.ADMIN_API + '/admins', admin)
      .pipe(catchError(this.handleError));
  }

  // edit admin details
  editAdmin(adminId: string, admin: any): Observable<any> {
    return this.httpClient
      .patch(this.ADMIN_API + '/admins/' + adminId, admin)
      .pipe(catchError(this.handleError));
  }

  // edit admin password
  editAdminPassword(adminId: string, password: any): Observable<any> {
    return this.httpClient
      .patch(
        this.ADMIN_API + '/admins/' + adminId + '/update-password',
        password
      )
      .pipe(catchError(this.handleError));
  }

  // delete admin
  deleteAdmin(adminId: string): Observable<any> {
    return this.httpClient
      .delete(this.ADMIN_API + '/admins/' + adminId)
      .pipe(catchError(this.handleError));
  }

  // ### SELLER MANAGEMENT

  // view a seller
  viewSeller(sellerId: string): Observable<any> {
    return this.httpClient
      .get(this.ADMIN_API + '/sellers/' + sellerId)
      .pipe(catchError(this.handleError));
  }

  // view all sellers
  viewAllSellers(): Observable<any> {
    return this.httpClient
      .get(this.ADMIN_API + '/sellers')
      .pipe(catchError(this.handleError));
  }

  // create new seller
  createNewSeller(seller: any): Observable<any> {
    return this.httpClient
      .post(this.ADMIN_API + '/sellers', seller)
      .pipe(catchError(this.handleError));
  }

  // edit seller
  editSeller(sellerId: string, seller: any): Observable<any> {
    return this.httpClient
      .patch(this.ADMIN_API + '/sellers/' + sellerId, seller)
      .pipe(catchError(this.handleError));
  }

  // delete a seller
  deleteSeller(sellerId: string): Observable<any> {
    return this.httpClient
      .delete(this.ADMIN_API + '/sellers/' + sellerId)
      .pipe(catchError(this.handleError));
  }

  // update seller password
  updateSellerPassword(sellerId: string, password: any): Observable<any> {
    return this.httpClient
      .patch(
        this.ADMIN_API + '/sellers/' + sellerId + '/update-password',
        password
      )
      .pipe(catchError(this.handleError));
  }

  // ### PRODUCT REVIEW MANAGEMENT

  // accept product review
  acceptProductReview(
    productId: string,
    productReviewId: string
  ): Observable<any> {
    return this.httpClient
      .patch(
        this.ADMIN_API +
          '/products/' +
          productId +
          '/productReviews/' +
          productReviewId,
        {}
      )
      .pipe(catchError(this.handleError));
  }

  // delete product review
  deleteProductReview(
    productId: string,
    productReviewId: string
  ): Observable<any> {
    return this.httpClient
      .delete(
        this.ADMIN_API +
          '/products/' +
          productId +
          '/productReviews/' +
          productReviewId
      )
      .pipe(catchError(this.handleError));
  }

  // view all product reviews
  getProductReview(): Observable<any> {
    return this.httpClient
      .get(this.ADMIN_API + '/productReviews')
      .pipe(catchError(this.handleError));
  }

  // ### INVOICES

  // ## Paid and requested seller invoices

  // paid
  // view all paid invoices
  viewSellerPaidInvoices(sellerId: string): Observable<any> {
    return this.httpClient
      .get(this.ADMIN_API + '/sellers/' + sellerId + '/paid/invoices')
      .pipe(catchError(this.handleError));
  }

  // view a paid invoice
  viewSellerPaidInvoice(sellerId: string, invoiceId: string): Observable<any> {
    return this.httpClient
      .get(
        this.ADMIN_API + '/sellers/' + sellerId + '/paid/invoices/' + invoiceId
      )
      .pipe(catchError(this.handleError));
  }

  // unpaid
  // view all requested invoices
  viewSellerUnpaidInvoices(sellerId: string): Observable<any> {
    return this.httpClient
      .get(this.ADMIN_API + '/sellers/' + sellerId + '/unpaid/invoices')
      .pipe(catchError(this.handleError));
  }

  // view a requested invoice
  viewSellerRequestedInvoice(
    sellerId: string,
    invoiceId: string
  ): Observable<any> {
    return this.httpClient
      .get(
        this.ADMIN_API +
          '/sellers/' +
          sellerId +
          '/unpaid/invoices/' +
          invoiceId
      )
      .pipe(catchError(this.handleError));
  }

  // ## All paid and requested invoices
  // unpaid

  // view all requested invoices
  viewAllRequestedInvoices(): Observable<any> {
    return this.httpClient
      .get(this.ADMIN_API + '/unpaid/invoices')
      .pipe(catchError(this.handleError));
  }

  // pay a requested invoice
  payRequestedInvoice(invoiceId: string): Observable<any> {
    return this.httpClient
      .post(this.ADMIN_API + '/unpaid/invoices/' + invoiceId, {})
      .pipe(catchError(this.handleError));
  }

  // request invoices for all sellers
  requestAllSellersInvoices(): Observable<any> {
    return this.httpClient
      .get(this.ADMIN_API + '/unpaid invoices')
      .pipe(catchError(this.handleError));
  }

  // request invoice for single seller | generate invoice
  requestGenerateInvoice(sellerId: string, invoice: any): Observable<any> {
    return this.httpClient
      .post(
        this.ADMIN_API + '/sellers/' + sellerId + '/unpaid/invoices',
        invoice
      )
      .pipe(catchError(this.handleError));
  }

  // view purchased cart items before invoicing
  viewCartBeforeInvoicing(sellerId: string): Observable<any> {
    return this.httpClient
      .get(this.ADMIN_API + '/sellers/' + sellerId + '/uninvoiced/cartItems')
      .pipe(catchError(this.handleError));
  }

  // ## All Invoices
  // view all invoices
  viewAllInvoices(): Observable<any> {
    return this.httpClient
      .get(this.ADMIN_API + '/invoices')
      .pipe(catchError(this.handleError));
  }

  // view an invoice
  viewInvoice(invoiceId: string): Observable<any> {
    return this.httpClient
      .get(this.ADMIN_API + '/invoices/' + invoiceId)
      .pipe(catchError(this.handleError));
  }

  // paid
  // view all invoices
  viewAllPaidInvoices(): Observable<any> {
    return this.httpClient
      .get(this.ADMIN_API + '/paid/invoices')
      .pipe(catchError(this.handleError));
  }

  // request invoice for seller
  requestPaidSellerInvoice(sellerId: string): Observable<any> {
    return this.httpClient
      .post(this.ADMIN_API + '/sellers/' + sellerId + '/paid/invoices', {})
      .pipe(catchError(this.handleError));
  }

  // ## SLIDER MANAGEMENT
  // add a slider image
  addSliderImage(image: any): Observable<any> {
    return this.httpClient
      .post(this.ADMIN_API + '/slider/images', image)
      .pipe(catchError(this.handleError));
  }

  // delete a slider image
  deleteSliderImage(sliderId: string): Observable<any> {
    return this.httpClient
      .delete(this.ADMIN_API + '/slider/images/' + sliderId)
      .pipe(catchError(this.handleError));
  }

  // view all slider images
  viewSliderImages(): Observable<any> {
    return this.httpClient
      .get(this.ADMIN_API + '/slider/images')
      .pipe(catchError(this.handleError));
  }

  // Insights
  // For chart

  // get purchased cart items insight by day
  getPurchasedCartItemsByDay(): Observable<any> {
    return this.httpClient
      .get(this.ADMIN_API + '/purchased/getPurchasedCartItemsByDay')
      .pipe(catchError(this.handleError));
  }

  // all cart items
  getAllCartItems(): Observable<any> {
    return this.httpClient
      .get(this.ADMIN_API + '/purchasedItems')
      .pipe(catchError(this.handleError));
  }

  // popular seller by product count
  getPopularSellerByProductCount(): Observable<any> {
    return this.httpClient
      .get(this.ADMIN_API + '/popular/sellers')
      .pipe(catchError(this.handleError));
  }

  // popular products by order count
  getPopularProductsByOrderCount(): Observable<any> {
    return this.httpClient
      .get(this.ADMIN_API + '/popularByOrder/products')
      .pipe(catchError(this.handleError));
  }

  // popular products by amount paid
  getPopularProductsByAmountPaid(): Observable<any> {
    return this.httpClient
      .get(this.ADMIN_API + '/popularByAmount/products')
      .pipe(catchError(this.handleError));
  }

  // popular products by quantity ordered
  getPopularProductsByQuantityOrdered(): Observable<any> {
    return this.httpClient
      .get(this.ADMIN_API + '/popularByQuantity/products')
      .pipe(catchError(this.handleError));
  }

  // ### MESSAGING
  // send message
  sendMessage(message: any): Observable<any> {
    return this.httpClient
      .post(this.ADMIN_API + '/seller/messages', message)
      .pipe(catchError(this.handleError));
  }

  // change status to read
  changeStatusToRead(messageId: string): Observable<any> {
    return this.httpClient
      .patch(this.ADMIN_API + '/seller/messages/' + messageId, {})
      .pipe(catchError(this.handleError));
  }

  // ## Unapproved products
  // change unapproved product to approved
  changeUnapprovedProduct(slug: string): Observable<any> {
    return this.httpClient
      .patch(this.ADMIN_API + '/approval/products/' + slug, {})
      .pipe(catchError(this.handleError));
  }

  // view all unapproved products
  getAllUnapprovedProducts(): Observable<any> {
    return this.httpClient
      .get(this.ADMIN_API + '/approval/products')
      .pipe(catchError(this.handleError));
  }

  // ### PAYMENT DETAIL MANAGEMENT FOR SINGLE SELLER
  // create new payment detail of a seller
  createSellerPaymentDetail(payment: any): Observable<any> {
    return this.httpClient
      .post(
        this.ADMIN_API + '/sellers/' + this.sellerId + '/paymentDetails',
        payment
      )
      .pipe(catchError(this.handleError));
  }

  // view all payment details of a seller
  viewSellerPaymentDetails(): Observable<any> {
    return this.httpClient
      .get(this.ADMIN_API + '/sellers/' + this.sellerId + '/paymentDetails')
      .pipe(catchError(this.handleError));
  }

  // edit a payment details of a seller
  editSellerPaymentDetail(
    paymentDetailId: string,
    paymentDetail: any
  ): Observable<any> {
    return this.httpClient
      .patch(
        this.ADMIN_API +
          '/sellers/' +
          this.sellerId +
          '/paymentDetails/' +
          paymentDetailId,
        paymentDetail
      )
      .pipe(catchError(this.handleError));
  }

  // delete a payment for a seller
  deleteSellerPaymentDetail(paymentDetailId: string): Observable<any> {
    return this.httpClient
      .delete(
        this.ADMIN_API +
          '/sellers/' +
          this.sellerId +
          '/paymentDetails/' +
          paymentDetailId
      )
      .pipe(catchError(this.handleError));
  }

  // ### NOTIFICATION MANAGEMENT
  // view all notifications
  viewAllNotifications(): Observable<any> {
    return this.httpClient
      .get(this.ADMIN_API + '/notifications')
      .pipe(catchError(this.handleError));
  }

  // view all unread notifications
  viewAllUnreadNotifications(): Observable<any> {
    return this.httpClient
      .get(this.ADMIN_API + '/unread/notifications')
      .pipe(catchError(this.handleError));
  }

  // view all read notifications
  viewAllReadNotifications(): Observable<any> {
    return this.httpClient
      .get(this.ADMIN_API + '/read/notifications')
      .pipe(catchError(this.handleError));
  }

  // mark one notifications as read
  markNotificationAsRead(unreadNotificationId: string): Observable<any> {
    return this.httpClient
      .patch(
        this.ADMIN_API + '/unread/notifications/' + unreadNotificationId,
        {}
      )
      .pipe(catchError(this.handleError));
  }

  // mark all notifications as read
  markAllNotificationsAsRead(): Observable<any> {
    return this.httpClient
      .patch(this.ADMIN_API + '/unread/notifications', {})
      .pipe(catchError(this.handleError));
  }

  // delete all your notifications
  deleteAllNotifications(): Observable<any> {
    return this.httpClient
      .delete(this.ADMIN_API + '/notifications')
      .pipe(catchError(this.handleError));
  }

  // ### FORGOT AND RESET PASSWORD
  // send email link
  sendEmailLink(): Observable<any> {
    return this.httpClient
      .post(this.ADMIN_API + '/forgot-password', {})
      .pipe(catchError(this.handleError));
  }

  // link from email
  linkFromEmail(): Observable<any> {
    return this.httpClient
      .post(this.ADMIN_API + '/forgot-password/{id}', {})
      .pipe(catchError(this.handleError));
  }

  // reset password link
  resetPassword(): Observable<any> {
    return this.httpClient
      .post(this.ADMIN_API + '/reset-password', {})
      .pipe(catchError(this.handleError));
  }

  // handle error
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later');
  }
}
