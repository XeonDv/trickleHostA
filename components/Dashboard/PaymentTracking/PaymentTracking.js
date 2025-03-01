function PaymentTracking() {
    return (
        <div data-name="payment-tracking">
            <div className="mb-6">
                <h2 className="text-2xl font-bold">Payment Tracking</h2>
                <p className="text-gray-400">Manage student and family payments</p>
            </div>

            <PaymentList />
        </div>
    );
}
