function FileUpload({ label, accept, onChange, preview, type = 'student' }) {
    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) onChange(file);
    };

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (file) onChange(file);
    };

    return (
        <div data-name="file-upload" className="mb-6">
            <label className="form-label">{label}</label>
            <div
                className={`file-upload ${type}-upload`}
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
            >
                <input
                    type="file"
                    accept={accept}
                    onChange={handleChange}
                    className="hidden"
                    id={`file-${label}`}
                />
                <label htmlFor={`file-${label}`} className="cursor-pointer">
                    <i className="fas fa-cloud-upload-alt text-3xl mb-2"></i>
                    <p>Drag and drop or click to upload</p>
                </label>
                {preview && (
                    <div className="file-preview">
                        <img src={preview} alt="Preview" />
                    </div>
                )}
            </div>
        </div>
    );
}
