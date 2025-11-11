export default function PrintCouponPage() {
  // This would fetch the ambassador's actual code
  const ambassadorCode = "JAMESVIP";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[400px] h-[250px] bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between border-t-8 border-primary">
        <div>
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold text-gray-800">InklessIsMore.ke</h2>
            <div className="text-right">
              <p className="text-lg font-bold text-primary">10% OFF</p>
              <p className="text-sm text-gray-500">Your Next Package</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Present this coupon to receive a 10% discount on any tattoo removal package.
          </p>
        </div>
        <div className="border-t-2 border-dashed border-gray-300 pt-4 text-center">
          <p className="text-sm text-gray-500">Your unique code:</p>
          <p className="text-2xl font-bold text-gray-800 tracking-widest">{ambassadorCode}</p>
        </div>
      </div>
    </div>
  );
}
