const HOME_PRODUCTS = [
    {
        id: "coffee-card",
        name: "Organic Coffee Beans",
        description: "Premium organically grown Arabica & Robusta coffee beans.",
        href: "coffee.html",
        className: "coffee-product",
        price: 650,
        isNew: false
    },
    {
        id: "cocoa-card",
        name: "Organic Cocoa Beans",
        description: "Fresh cocoa beans from sustainable organic farms.",
        href: "cocoa.html",
        className: "cocoa-product",
        price: 550,
        isNew: false
    },
    {
        id: "chocolate-card",
        name: "Premium Chocolates",
        description: "Handcrafted dark, milk and assorted chocolates.",
        href: "chocolate.html",
        className: "chocolate-product",
        price: 450,
        isNew: false
    },
    {
        id: "gift-card",
        name: "Gift Packets",
        description: "Beautiful gift hampers for every special occasion.",
        href: "gift pack.html",
        className: "gift-product",
        price: 750,
        isNew: true
    }
];

const COFFEE_BEANS = [
    {
        id: 1,
        name: "Organic Arabica Beans",
        description: "Premium Arabica coffee beans with a smooth taste and rich aroma.",
        indiaPrice: 650,
        exportPrice: 18,
        price: 650,
        image: "arabica.jpg"
    },
    {
        id: 2,
        name: "Organic Robusta Beans",
        description: "Strong and bold Robusta coffee beans with rich flavour.",
        indiaPrice: 520,
        exportPrice: 15,
        price: 520,
        image: "robusta.jpg"
    },
    {
        id: 3,
        name: "Peaberry Coffee Beans",
        description: "Special peaberry coffee beans with concentrated flavour and aroma.",
        indiaPrice: 850,
        exportPrice: 24,
        price: 850,
        image: "peaberry.jpg"
    },
    {
        id: 4,
        name: "Green Coffee Beans",
        description: "Naturally processed green coffee beans suitable for roasting.",
        indiaPrice: 600,
        exportPrice: 17,
        price: 600,
        image: "green.jpg"
    },
    {
        id: 5,
        name: "Single Origin Coffee",
        description: "Premium single-origin coffee with a distinctive natural flavour.",
        indiaPrice: 950,
        exportPrice: 28,
        price: 950,
        image: "single.jpg"
    },
    {
        id: 6,
        name: "Estate Blend Coffee",
        description: "A balanced blend of carefully selected premium coffee beans.",
        indiaPrice: 780,
        exportPrice: 22,
        price: 780,
        image: "estate.jpg"
    }
];

const COFFEE_POWDERS = [
    {
        id: 101,
        name: "Espresso Coffee Powder",
        description: "Fine espresso powder for rich crema and intense flavour.",
        indiaPrice: 450,
        exportPrice: 12,
        price: 450,
        image: "espresso.jpg"
    },
    {
        id: 102,
        name: "Instant Coffee Powder",
        description: "Fast brewing organic coffee powder for instant cups.",
        indiaPrice: 520,
        exportPrice: 14,
        price: 520,
        image: "instant.jpg"
    },
    {
        id: 103,
        name: "Cold Brew Coffee Powder",
        description: "Smooth powder blended for cold brew and iced coffee.",
        indiaPrice: 480,
        exportPrice: 13,
        price: 480,
        image: "filter.jpg"
    },
    {
        id: 104,
        name: "French Roast Coffee Powder",
        description: "Deep roasted powder with smoky chocolate notes.",
        indiaPrice: 600,
        exportPrice: 16,
        price: 600,
        image: "french.jpg"
    }
];

const STORAGE_KEYS = {
    cart: "CocoBrew_cart",
    order: "CocoBrew_order",
    user: "CocoBrew_user"
};

function createAppConfig(rootId) {
    const isCoffeePage = rootId === "coffeeApp";

    return {
        data() {
            return {
                notice: "",
                loginOpen: false,
                signupOpen: false,
                isLoggedIn: false,
                userName: "",
                loginForm: {
                    email: "",
                    password: ""
                },
                signupForm: {
                    name: "",
                    email: "",
                    password: ""
                },
                contactForm: {
                    name: "",
                    email: "",
                    message: ""
                },
                subscribeEmail: "",
                cartOpen: false,
                cart: [],
                order: {
                    items: [],
                    total: 0,
                    customer: "",
                    date: "",
                    orderId: "",
                    confirmed: false,
                    details: {
                        name: "",
                        phone: "",
                        address: "",
                        city: "",
                        state: "",
                        pin: "",
                        instructions: "",
                        giftPacking: false,
                        deliveryCharges: 0,
                        discount: 0,
                        paymentMethod: "",
                        paymentStatus: "",
                        orderStatus: "",
                        trackingId: "",
                        expectedDeliveryDate: "",
                        remarks: ""
                    }
                },
                orderConfirmed: false,
                editingOrder: false,
                locationLoading: false,
                selectedProduct: null,
                aboutCards: [
                    {
                        title: "Organic Farming",
                        className: "Organic",
                        description: "Chemical-free farming practices that produce healthy, flavorful, and environmentally friendly coffee and cocoa."
                    },
                    {
                        title: "Premium Coffee",
                        className: "coffee",
                        description: "Carefully selected Arabica and Robusta beans roasted to perfection for a rich aroma and exceptional taste."
                    },
                    {
                        title: "Fine Cocoa",
                        className: "cocoa",
                        description: "Premium organic cocoa beans processed with international quality standards for chocolates and beverages."
                    }
                ],
                products: isCoffeePage ? [] : HOME_PRODUCTS,
                coffeeBeans: isCoffeePage ? COFFEE_BEANS : [],
                coffeePowders: isCoffeePage ? COFFEE_POWDERS : [],
                benefits: [
                    {
                        title: "Coffee Benefits",
                        className: "coffee-card",
                        items: [
                            "Rich in natural antioxidants.",
                            "Boosts energy and alertness.",
                            "Supports mental focus.",
                            "May improve physical performance.",
                            "Helps protect cells from damage."
                        ]
                    },
                    {
                        title: "Cocoa Benefits",
                        className: "cocoa-card",
                        items: [
                            "High in flavonoid antioxidants.",
                            "Supports heart health.",
                            "May improve mood naturally.",
                            "Contains essential minerals.",
                            "Promotes healthy blood circulation."
                        ]
                    }
                ],
                gallery: [
                    {
                        image: "1.webp",
                        title: "Organic Farming"
                    },
                    {
                        image: "2.jpg",
                        title: "Coffee Plantation"
                    },
                    {
                        image: "3.jpg",
                        title: "Cocoa Plantation"
                    },
                    {
                        image: "4.jpg",
                        title: "Processing Factory"
                    },
                    {
                        image: "5.jpg",
                        title: "Packaging Unit"
                    },
                    {
                        image: "6.jpg",
                        title: "Restaurant & Cafe"
                    }
                ]
            };
        },
        computed: {
            cartTotal() {
                return this.cart.reduce((total, item) => {
                    return total + (item.price || item.indiaPrice || 0) * (item.qty || 1);
                }, 0);
            },
            orderGiftFee() {
                return 0;
            },
            cartTotalWithGift() {
                return this.cartTotal + this.orderGiftFee;
            },
            cartCount() {
                return this.cart.reduce((count, item) => count + (item.qty || 1), 0);
            },
            itemSubtotal() {
                if (!this.order || !Array.isArray(this.order.items)) return 0;
                return this.order.items.reduce((sum, item) => {
                    return sum + (item.price || item.indiaPrice || 0) * (item.qty || 1);
                }, 0);
            },
            deliveryChargeValue() {
                const value = Number(this.order?.details?.deliveryCharges || 0);
                return Number.isFinite(value) ? value : 0;
            },
            giftPackingFeeValue() {
                return 0;
            },
            discountValue() {
                const discount = this.order?.details?.discount || 0;
                if (typeof discount === 'string' && discount.trim().endsWith('%')) {
                    const pct = parseFloat(discount);
                    if (!isNaN(pct)) {
                        return ((this.itemSubtotal + this.giftPackingFeeValue + this.deliveryChargeValue) * pct) / 100;
                    }
                }
                const numericValue = Number(discount) || 0;
                return Number.isFinite(numericValue) ? numericValue : 0;
            },
            gstValue() {
                const base = this.itemSubtotal + this.giftPackingFeeValue + this.deliveryChargeValue;
                return Number((base * 0.05).toFixed(2));
            },
            orderSummaryTotal() {
                return Math.max(0, this.itemSubtotal + this.giftPackingFeeValue + this.deliveryChargeValue + this.gstValue - this.discountValue);
            },
            deliveryLocationText() {
                const details = this.order?.details || {};
                const city = details.city || '';
                const state = details.state || '';
                const pin = details.pin || '';
                const locationParts = [city, state, pin].filter(Boolean);
                return locationParts.length ? locationParts.join(', ') : 'Location not added yet';
            },
            deliveryAddressText() {
                const details = this.order?.details || {};
                return details.address || 'Address not added yet';
            }
        },
        created() {
            this.loadCart();
            this.loadUser();
            if (rootId === "checkoutApp") {
                this.loadOrder();
            }
        },
        methods: {
            loginUser() {
                const email = this.loginForm.email.trim();
                const password = this.loginForm.password.trim();
                const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

                if (!email || !password) {
                    this.notice = "Please enter both email and password.";
                    return;
                }

                if (!emailValid) {
                    this.notice = "Please enter a valid email address.";
                    return;
                }

                if (password.length < 6) {
                    this.notice = "Password must be at least 6 characters.";
                    return;
                }

                this.isLoggedIn = true;
                this.userName = email.split("@")[0] || "Guest";
                this.loginOpen = false;
                this.notice = `Welcome back, ${this.userName}!`;
                this.loginForm.password = "";
                this.saveUser();
            },
            signupUser() {
                const name = this.signupForm.name.trim();
                const email = this.signupForm.email.trim();
                const password = this.signupForm.password.trim();
                const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

                if (!name || !email || !password) {
                    this.notice = "Please fill all signup fields.";
                    return;
                }

                if (!emailValid) {
                    this.notice = "Please enter a valid email address.";
                    return;
                }

                if (password.length < 6) {
                    this.notice = "Password must be at least 6 characters.";
                    return;
                }

                this.isLoggedIn = true;
                this.userName = name;
                this.signupOpen = false;
                this.notice = `Welcome, ${name}! Your account is created.`;
                this.signupForm.name = "";
                this.signupForm.email = "";
                this.signupForm.password = "";
                this.loginForm.email = email;
                this.saveUser();
            },
            logout() {
                this.isLoggedIn = false;
                this.userName = "";
                this.loginForm.email = "";
                this.loginForm.password = "";
                this.loginOpen = false;
                this.saveUser();
                this.notice = "You have logged out.";
            },
            normalizeProduct(product, qty = 1) {
                const baseProduct = product || {};
                const productName = baseProduct.name || 'Selected product';
                const productId = baseProduct.id || productName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                const unitPrice = Number(baseProduct.price || baseProduct.indiaPrice || 0) || 0;
                return {
                    ...baseProduct,
                    id: productId,
                    name: productName,
                    description: baseProduct.description || 'Premium CocoBrew product',
                    image: baseProduct.image || 'coffee-beans.jpg',
                    price: unitPrice,
                    indiaPrice: unitPrice,
                    qty: qty,
                    cartId: `${productId}-${Date.now()}-${Math.random().toString(16).slice(2)}`
                };
            },
            addToCart(product) {
                const item = this.normalizeProduct(product, 1);
                const existing = this.cart.find(existingItem => existingItem.id === item.id);
                if (existing) {
                    existing.qty += 1;
                } else {
                    this.cart.push(item);
                }
                this.saveCart();
                this.notice = `Added ${item.name} to cart.`;
                this.cartOpen = true;
            },
            buyNow(product) {
                const item = this.normalizeProduct(product, 1);
                this.order.items = [item];
                this.order.customer = this.userName || this.loginForm.email || 'Guest';
                this.order.date = new Date().toLocaleString();
                this.order.orderId = this.order.orderId || `COCO-${Date.now()}`;
                this.order.confirmed = false;
                this.orderConfirmed = false;
                this.editingOrder = true;
                this.order.details = {
                    ...this.order.details,
                    name: this.order.details.name || this.userName || '',
                    phone: this.order.details.phone || '',
                    address: this.order.details.address || '',
                    city: this.order.details.city || '',
                    state: this.order.details.state || '',
                    pin: this.order.details.pin || '',
                    instructions: this.order.details.instructions || '',
                    giftPacking: this.order.details.giftPacking || false,
                    deliveryCharges: this.order.details.deliveryCharges || 0,
                    discount: this.order.details.discount || 0,
                    paymentMethod: this.order.details.paymentMethod || 'Cash on Delivery (COD)',
                    paymentStatus: this.order.details.paymentStatus || 'Pending',
                    orderStatus: this.order.details.orderStatus || 'Processing',
                    trackingId: this.order.details.trackingId || `TRK-${Date.now()}`,
                    expectedDeliveryDate: this.order.details.expectedDeliveryDate || 'Today, 6 PM - 9 PM',
                    remarks: this.order.details.remarks || 'Order placed from product page.'
                };
                this.recalculateOrder();
                this.saveOrder();
                window.location.href = 'order.html';
            },
            async detectCurrentLocation() {
                if (!navigator.geolocation) {
                    this.notice = 'Location access is not supported on this browser.';
                    return;
                }

                this.locationLoading = true;
                this.notice = 'Detecting your current location...';

                navigator.geolocation.getCurrentPosition(async (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;

                    try {
                        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`, {
                            headers: {
                                'Accept-Language': 'en'
                            }
                        });

                        if (!response.ok) {
                            throw new Error('Unable to fetch location details.');
                        }

                        const data = await response.json();
                        const address = data.address || {};
                        const streetParts = [address.house_number, address.road, address.suburb, address.neighbourhood, address.city_district, address.locality].filter(Boolean);
                        const city = address.city || address.town || address.village || address.municipality || '';
                        const state = address.state || address.state_district || '';
                        const pin = address.postcode || '';

                        this.order.details.address = streetParts.length ? streetParts.join(', ') : (data.display_name || this.order.details.address || '');
                        this.order.details.city = city || this.order.details.city || '';
                        this.order.details.state = state || this.order.details.state || '';
                        this.order.details.pin = pin || this.order.details.pin || '';
                        this.notice = 'Current location has been added to your delivery address.';
                        this.saveOrder();
                    } catch (error) {
                        this.notice = 'Unable to detect your location automatically. Please enter the address manually.';
                    } finally {
                        this.locationLoading = false;
                    }
                }, (error) => {
                    this.locationLoading = false;
                    if (error.code === error.PERMISSION_DENIED) {
                        this.notice = 'Location access was denied. Please enter your delivery address manually.';
                    } else {
                        this.notice = 'Unable to access your location right now. Please enter the address manually.';
                    }
                }, {
                    enableHighAccuracy: true,
                    timeout: 15000,
                    maximumAge: 0
                });
            },
            editOrderDetails() {
                this.editingOrder = true;
                this.orderConfirmed = false;
            },
            removeFromCart(item) {
                const index = this.cart.findIndex(product => product.cartId === item.cartId);
                if (index !== -1) {
                    this.cart.splice(index, 1);
                    this.saveCart();
                }
                if (this.cart.length === 0) {
                    this.cartOpen = false;
                }
                this.notice = `Removed ${item.name} from cart.`;
            },
            clearCart() {
                this.cart = [];
                this.saveCart();
                this.notice = "Cart cleared.";
                this.cartOpen = false;
            },
            openProduct(product) {
                this.buyNow(product);
            },
            submitContact() {
                if (this.contactForm.name && this.contactForm.email && this.contactForm.message) {
                    this.notice = "Thanks for reaching out. We will be in touch soon.";
                    this.contactForm.name = "";
                    this.contactForm.email = "";
                    this.contactForm.message = "";
                } else {
                    this.notice = "Please complete the contact form.";
                }
            },
            subscribe() {
                if (this.subscribeEmail) {
                    this.notice = `You are subscribed to the CocoBrew newsletter with ${this.subscribeEmail}.`;
                    this.subscribeEmail = "";
                } else {
                    this.notice = "Please enter an email address to subscribe.";
                }
            },
            checkout() {
                if (!this.isLoggedIn) {
                    this.loginOpen = true;
                    this.notice = "Please login before checkout.";
                    return;
                }
                if (this.cart.length === 0) {
                    this.notice = "Your cart is empty.";
                    return;
                }
                const orderData = {
                    items: this.cart.map(item => ({ ...item })),
                    total: this.cartTotal,
                    customer: this.userName || this.loginForm.email || "Guest",
                    date: new Date().toLocaleString(),
                    orderId: this.order.orderId || `COCO-${Date.now()}`,
                    confirmed: false,
                    details: {
                        name: this.order.details.name || this.userName || "",
                        phone: this.order.details.phone || "",
                        address: this.order.details.address || "",
                        city: this.order.details.city || "",
                        state: this.order.details.state || "",
                        pin: this.order.details.pin || "",
                        instructions: this.order.details.instructions || "",
                        giftPacking: this.order.details.giftPacking || false,
                        deliveryCharges: this.order.details.deliveryCharges || 0,
                        paymentMethod: this.order.details.paymentMethod || "",
                        paymentStatus: this.order.details.paymentStatus || "",
                        orderStatus: this.order.details.orderStatus || "",
                        trackingId: this.order.details.trackingId || "",
                        expectedDeliveryDate: this.order.details.expectedDeliveryDate || "",
                        remarks: this.order.details.remarks || ""
                    }
                };
                localStorage.setItem(STORAGE_KEYS.order, JSON.stringify(orderData));
                window.location.href = "order.html";
            },
            printBill() {
                // hide the download button before printing to avoid duplication in PDF
                const btns = document.querySelectorAll('.download-btn');
                btns.forEach(b => b.style.display = 'none');
                window.print();
                // restore after a short delay
                setTimeout(() => btns.forEach(b => b.style.display = ''), 500);
            },
            backToShop() {
                window.location.href = "coffee.html";
            },
            confirmOrder() {
                if (!this.order || this.order.items.length === 0) {
                    this.notice = "Nothing to confirm.";
                    return;
                }
                if (!this.order.details.name || !this.order.details.phone || !this.order.details.address || !this.order.details.city || !this.order.details.state || !this.order.details.pin || !this.order.details.paymentMethod || !this.order.details.paymentStatus) {
                    this.notice = "Please complete all required delivery and payment details before confirming.";
                    return;
                }
                if (!this.order.orderId) {
                    this.order.orderId = `COCO-${Date.now()}`;
                }
                this.order.confirmed = true;
                this.orderConfirmed = true;
                this.editingOrder = false;
                this.saveOrder();
                this.notice = "Order confirmed! Your delivery is on the way.";
                this.clearCart();
            },
            saveCart() {
                localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(this.cart));
            },
            loadCart() {
                const stored = localStorage.getItem(STORAGE_KEYS.cart);
                if (stored) {
                    try {
                        this.cart = JSON.parse(stored);
                    } catch (e) {
                        this.cart = [];
                    }
                }
            },
            saveUser() {
                localStorage.setItem(STORAGE_KEYS.user, JSON.stringify({
                    isLoggedIn: this.isLoggedIn,
                    userName: this.userName,
                    email: this.loginForm.email
                }));
            },
            loadUser() {
                const stored = localStorage.getItem(STORAGE_KEYS.user);
                if (stored) {
                    try {
                        const data = JSON.parse(stored);
                        this.isLoggedIn = data.isLoggedIn || false;
                        this.userName = data.userName || "";
                        this.loginForm.email = data.email || "";
                    } catch (e) {
                        this.isLoggedIn = false;
                    }
                }
            },
            loadOrder() {
                const stored = localStorage.getItem(STORAGE_KEYS.order);
                if (stored) {
                    try {
                        this.order = JSON.parse(stored);
                        this.recalculateOrder();
                        this.orderConfirmed = !!this.order.confirmed;
                        this.editingOrder = false;
                    } catch (e) {
                        this.order = { items: [], total: 0, customer: "", date: "", orderId: "", confirmed: false, details: { name: "", phone: "", address: "", instructions: "", giftPacking: false } };
                    }
                }
            },
            saveOrder() {
                localStorage.setItem(STORAGE_KEYS.order, JSON.stringify(this.order));
            },
            recalculateOrder() {
                if (!this.order || !Array.isArray(this.order.items)) {
                    this.order = { items: [], total: 0, customer: "", date: "", details: { giftPacking: false } };
                }
                const itemTotal = this.order.items.reduce((sum, item) => {
                    return sum + (item.price || item.indiaPrice || 0) * (item.qty || 1);
                }, 0);
                const deliveryFee = Number(this.order.details?.deliveryCharges || 0);
                const discount = this.order.details?.discount || 0;
                const subtotal = itemTotal + deliveryFee;
                let discountAmount = 0;
                if (typeof discount === 'string' && discount.trim().endsWith('%')) {
                    const pct = parseFloat(discount);
                    if (!isNaN(pct)) discountAmount = (subtotal * pct) / 100;
                } else {
                    discountAmount = Number(discount) || 0;
                }
                const gstAmount = Number((subtotal * 0.05).toFixed(2));
                this.order.gst = gstAmount;
                this.order.total = Math.max(0, subtotal + gstAmount - discountAmount);
            },
            updateOrderQty(item, delta) {
                const currentQty = item.qty || 1;
                const nextQty = Math.max(1, currentQty + delta);
                if (nextQty === currentQty) {
                    return;
                }
                item.qty = nextQty;
                this.recalculateOrder();
                this.saveOrder();
            },
            removeOrderItem(item) {
                const index = this.order.items.findIndex(orderItem => orderItem.cartId === item.cartId);
                if (index !== -1) {
                    this.order.items.splice(index, 1);
                    this.recalculateOrder();
                    this.saveOrder();
                }
            }
        }
    };
}

const VueRuntime = window.Vue;

function mountCocobrewApp(rootId) {
    if (!document.getElementById(rootId) || !VueRuntime) {
        return;
    }

    const app = VueRuntime.createApp(createAppConfig(rootId));
    window.__COCOBREW_APP__ = app.mount(`#${rootId}`);
}

mountCocobrewApp("app");
mountCocobrewApp("coffeeApp");
mountCocobrewApp("checkoutApp");
mountCocobrewApp("pageApp");
