const Popup = () => {
  return (
    <div className="p-4 w-64">
      <h1 className="text-xl font-bold text-center mb-4">CopyShield</h1>
      <p className="text-sm text-gray-700">
        This extension blocks right-click, copy, and dev tools access to protect
        your content.
      </p>
      <p className="mt-4 text-xs text-gray-500 text-center">
        It's always running silently on supported pages.
      </p>
    </div>
  );
};

export default Popup;
