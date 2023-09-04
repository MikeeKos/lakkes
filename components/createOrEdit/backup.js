<section className={classes.contact}>
        {/* <div className="w-full h-full">
          <FormMap
            sateliteMap={sateliteMap}
            sendDataToForm={handleDataFromMap}
            initialCoordsFromEditPage={{
              lng: form.longitude,
              lat: form.latitude,
            }}
          />
        </div> */}
        <div style={{ marginTop: "400px" }}></div>
        <div>
          <h1>Toggle map style</h1>
          <button onClick={changeStyleHandler}>Change map style</button>
        </div>
        <h1>Lake form</h1>
        <form
          className={classes.form}
          id={formId}
          onSubmit={submitFormHandler}
          encType="multipart/form-data"
        >
          <div className={classes.controls}>
            <div className={classes.control}>
              <label htmlFor="title">Title</label>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
              />
              {/* <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
              /> */}
            </div>
            <div className={classes.control}>
              <label htmlFor="description">Description</label>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                type="text"
                name="description"
                value={form.description}
                onChange={handleChange}
              />
              {/* <input
                type="text"
                name="description"
                value={form.description}
                onChange={handleChange}
              /> */}
            </div>
            <div className={classes.control}>
              <label htmlFor="location">Location</label>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
              />
              {/* <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
              /> */}
            </div>
            <div className={classes.control}>
              <div>Set location</div>
              <div>
                <label htmlFor="latitude">Latitude</label>
                <TextField
                  required
                  id="outlined-read-only-input"
                  label="Read Only"
                  InputProps={{
                    readOnly: true,
                    type: "text",
                    id: "latitude",
                    name: "latitude",
                    value: form.latitude,
                  }}
                />
                {/* <input
                  type="text"
                  id="latitude"
                  name="latitude"
                  required
                  readOnly
                  value={form.latitude}
                /> */}
              </div>
              <div>
                <label htmlFor="longitude">Longitude</label>
                <TextField
                  required
                  id="outlined-read-only-input"
                  label="Read Only"
                  InputProps={{
                    readOnly: true,
                    type: "text",
                    id: "longitude",
                    name: "longitude",
                    value: form.longitude,
                  }}
                />
                {/* <input
                  type="text"
                  id="longitude"
                  name="longitude"
                  required
                  readOnly
                  value={form.longitude}
                /> */}
              </div>
            </div>
            <div className={classes.control}>
              <label htmlFor="location">Location</label>
              <div className="flex items-center justify-center w-full">
                <label
                  for="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    name="files"
                    multiple
                    accept="image/*"
                    onChange={changeFormHandler}
                  />
                </label>
              </div>
              {/* <input
                type="file"
                name="files"
                multiple
                accept="image/*"
                onChange={changeFormHandler}
              /> */}
              <div>
                {props.images &&
                  props.images.map((image) => {
                    return (
                      <li key={image.filename}>
                        <Image
                          src={image.url}
                          alt="Hello"
                          width={300}
                          height={200}
                          placeholder="blur"
                          blurDataURL={"/image.png"}
                        />
                        <div>
                          <input
                            onChange={checkboxChangeHandler}
                            value={image.filename}
                            id={image.filename}
                            type="checkbox"
                          />
                          <label htmlFor={image.filename}>Delete?</label>
                        </div>
                      </li>
                    );
                  })}
                {previews.map((preview, index) => {
                  return (
                    <li key={index}>
                      <img
                        key={index}
                        src={preview}
                        alt={`Preview ${index + 1}`}
                      />
                    </li>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={classes.actions}>
            <button>Send</button>
          </div>
        </form>
      </section>