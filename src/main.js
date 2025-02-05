import './mixins.scss';
import './custom.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

document.querySelector('#app').innerHTML = `
<div class="d-flex justify-content-between flex-column min-vh-100">
  <div class="container pt-5">
    <h1 class="text-center mb-5">Variant C</h1>
    <div class="row g-4">
      <div class="col-md-6 col-lg-4">
        <div class="card max-width-600 mx-auto">
          <!-- Card nav -->
          <div class="card-header">
            <ul class="nav nav-pills tab-primary-dark gap-2" id="myTabs" role="tablist">
              <li class="nav-item" role="none">
                <button aria-controls="tab1" aria-selected="true" class="nav-link active" data-bs-target="#tab1"
                        data-bs-toggle="tab"
                        id="tab1-tab" role="tab" type="button">Tab 1
                </button>
              </li>
              <li class="nav-item" role="none">
                <button aria-controls="tab2" aria-selected="false" class="nav-link" data-bs-target="#tab2"
                        data-bs-toggle="tab" id="tab2-tab" role="tab" type="button">Tab 2
                </button>
              </li>
              <li class="nav-item" role="none">
                <button aria-controls="tab3" aria-selected="false" class="nav-link" data-bs-target="#tab3"
                        data-bs-toggle="tab" id="tab3-tab" role="tab" type="button">Tab 3
                </button>
              </li>
              <li class="nav-item" role="none">
                <button aria-disabled="true" class="nav-link disabled" disabled tabindex="-1">Disabled
                </button>
              </li>
            </ul>
          </div>

          <!-- Card Content -->
          <div class="tab-content" id="myTabsContent">
            <!-- Card Tab 1 -->
            <div aria-labelledby="tab1-tab" class="tab-pane show active" id="tab1" role="tabpanel">
              <div class="card-body d-flex flex-column gap-4">
                <div>
                  <h5 class="card-title mt-3">Design Improvements</h5>
                  <h6 class="card-subtitle text-muted ">When consistency meets hierarchy and edge cases</h6>
                </div>
                <div>
                  <ul class="nav nav-pills tab-secondary gap-2 d-flex flex-row" id="myItems" role="tablist">
                    <li class="nav-item">
                      <button aria-controls="item1" aria-selected="true" class="nav-link active" data-bs-target="#item1"
                              data-bs-toggle="tab" id="item1-tab" role="tab" type="button">An item with 4/3 ratio
                      </button>
                    </li>
                    <li class="nav-item">
                      <button aria-controls="item2" aria-selected="false" class="nav-link" data-bs-target="#item2"
                              data-bs-toggle="tab"
                              id="item2-tab" role="tab" type="button"> video 16/9 ratio
                      </button>
                    </li>
                    <li class="nav-item">
                      <button aria-controls="item3" aria-selected="false" class="nav-link" data-bs-target="#item3"
                              data-bs-toggle="tab"
                              id="item3-tab" role="tab" type="button">A portrait 3:4 ratio
                      </button>
                    </li>
                    <li class="nav-item">
                      <button aria-controls="item5" aria-selected="false" class="nav-link disabled"
                              data-bs-target="#item5"
                              data-bs-toggle="tab"
                              id="item5-tab" role="tab" type="button">Disable item
                      </button>
                    </li>
                    <li class="nav-item">
                      <button aria-controls="item4" aria-selected="false" class="nav-link" data-bs-target="#item4"
                              data-bs-toggle="tab"
                              id="item4-tab" role="tab" type="button">Broken item
                      </button>
                    </li>
                  </ul>
                </div>
                <div>
                  <div class="tab-content" id="myItemsContent">
                    <!-- Item 1 -->
                    <div aria-labelledby="item1-tab" class="tab-pane show fade active" id="item1" role="tabpanel">
                      <img alt="placeholder image description " class="card-img" src="https://picsum.photos/400/300">
                    </div>
                    <!-- Item 2 -->
                    <div aria-labelledby="item2-tab" class="tab-pane fade" id="item2" role="tabpanel">
                      <img alt="placeholder image description" class="card-img" src="https://picsum.photos/160/90">
                    </div>
                    <!-- Item 3 -->
                    <div aria-labelledby="item3-tab" class="tab-pane fade" id="item3" role="tabpanel">
                      <img alt="placeholder image description" class="card-img" src="https://picsum.photos/300/400">
                    </div>
                    <!-- Item 4 -->
                    <div aria-labelledby="item4-tab" class="tab-pane show fade rounded-2 ratio ratio-4x3 bg-light"
                         id="item4" role="tabpanel">
                      <img alt="Image of an elephant - failed to load" class="card-img" src="non-existing-image.jpg">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Card Tab 2 -->
            <div aria-labelledby="tab2-tab" class="tab-pane" id="tab2" role="tabpanel">
              <div class="card-body d-flex flex-column align-items-center py-5 my-4 gap-3">
                <svg height="48" stroke="#343a40" viewBox="0 0 50 50" width="48">
                  <g fill="none" fill-rule="evenodd">
                    <g stroke-width="3" transform="translate(2 2)">
                      <circle cx="24" cy="24" r="22" stroke-opacity="0" />
                      <path d="M46 24c0-12.15-9.85-22-22-22">
                        <animateTransform
                          attributeName="transform"
                          dur="1s"
                          from="0 24 24"
                          repeatCount="indefinite"
                          to="360 24 24"
                          type="rotate" />
                      </path>
                    </g>
                  </g>
                </svg>
                <p class="card-text">Loading...</p>
              </div>
            </div>

            <!-- Card Tab 3 -->
            <div aria-labelledby="tab3-tab" class="tab-pane" id="tab3" role="tabpanel">
              <div class="row g-0 card-body">
                <div class="col-md-4">
                  <img alt="placeholder image description" class="card-img" src="https://picsum.photos/209/280">
                </div>
                <div class="col-md-8 px-1 px-md-4 py-2 py-md-0">
                  <h5 class="card-title mt-3">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                    additional
                    content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>

          <!-- Card Footer -->
          <div class="card-footer bg-light">
            <p class="card-text"><small>2 days ago</small></p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4">
        <div class="card card-primary max-width-600 mx-auto">
          <!-- Card nav -->
          <div class="card-header">
            <ul class="nav nav-pills tab-primary-dark gap-2" id="myTabs-2" role="tablist">
              <li class="nav-item" role="none">
                <button aria-controls="tab1-2" aria-selected="true" class="nav-link active" data-bs-target="#tab1-2"
                        data-bs-toggle="tab"
                        id="tab1-tab-2" role="tab" type="button">Tab 1
                </button>
              </li>
              <li class="nav-item" role="none">
                <button aria-controls="tab2-2" aria-selected="false" class="nav-link" data-bs-target="#tab2-2"
                        data-bs-toggle="tab" id="tab2-tab-2" role="tab" type="button">Tab 2
                </button>
              </li>
              <li class="nav-item" role="none">
                <button aria-controls="tab3-2" aria-selected="false" class="nav-link" data-bs-target="#tab3-2"
                        data-bs-toggle="tab" id="tab3-tab-2" role="tab" type="button">Tab 3
                </button>
              </li>
              <li class="nav-item" role="none">
                <button aria-disabled="true" class="nav-link disabled" disabled tabindex="-1">Disabled
                </button>
              </li>
            </ul>
          </div>

          <!-- Card Content -->
          <div class="tab-content" id="myTabsContent-2">
            <!-- Card Tab 1 -->
            <div aria-labelledby="tab1-tab-2" class="tab-pane show active" id="tab1-2" role="tabpanel">
              <div class="card-body d-flex flex-column gap-4">
                <div>
                  <h5 class="card-title mt-3">Design Improvements</h5>
                  <h6 class="card-subtitle text-muted ">When consistency meets hierarchy and edge cases</h6>
                </div>
                <div>
                  <ul class="nav nav-pills tab-secondary gap-2 d-flex flex-row" id="myItems-2" role="tablist">
                    <li class="nav-item">
                      <button aria-controls="item1-2" aria-selected="true" class="nav-link active"
                              data-bs-target="#item1-2"
                              data-bs-toggle="tab" id="item1-tab-2" role="tab" type="button">An item with 4/3 ratio
                      </button>
                    </li>
                    <li class="nav-item">
                      <button aria-controls="item2-2" aria-selected="false" class="nav-link" data-bs-target="#item2-2"
                              data-bs-toggle="tab"
                              id="item2-tab-2" role="tab" type="button"> video 16/9 ratio
                      </button>
                    </li>
                    <li class="nav-item">
                      <button aria-controls="item3-2" aria-selected="false" class="nav-link" data-bs-target="#item3-2"
                              data-bs-toggle="tab"
                              id="item3-tab-2" role="tab" type="button">A portrait 3:4 ratio
                      </button>
                    </li>
                    <li class="nav-item">
                      <button aria-controls="item5-2" aria-selected="false" class="nav-link disabled"
                              data-bs-target="#item5-2"
                              data-bs-toggle="tab"
                              id="item5-tab-2" role="tab" type="button">Disable item
                      </button>
                    </li>
                    <li class="nav-item">
                      <button aria-controls="item4-2" aria-selected="false" class="nav-link" data-bs-target="#item4-2"
                              data-bs-toggle="tab"
                              id="item4-tab-2" role="tab" type="button">Broken item
                      </button>
                    </li>
                  </ul>
                </div>
                <div>
                  <div class="tab-content" id="myItemsContent-2">
                    <!-- Item 1 -->
                    <div aria-labelledby="item1-tab-2" class="tab-pane show fade active" id="item1-2" role="tabpanel">
                      <img alt="placeholder image description " class="card-img" src="https://picsum.photos/400/300">
                    </div>
                    <!-- Item 2 -->
                    <div aria-labelledby="item2-tab-2" class="tab-pane fade" id="item2-2" role="tabpanel">
                      <img alt="placeholder image description" class="card-img" src="https://picsum.photos/160/90">
                    </div>
                    <!-- Item 3 -->
                    <div aria-labelledby="item3-tab-2" class="tab-pane fade" id="item3-2" role="tabpanel">
                      <img alt="placeholder image description" class="card-img" src="https://picsum.photos/300/400">
                    </div>
                    <!-- Item 4 -->
                    <div aria-labelledby="item4-tab-2" class="tab-pane show fade rounded-2 ratio ratio-4x3 bg-light"
                         id="item4-2" role="tabpanel">
                      <img alt="Image of an elephant - failed to load" class="card-img" src="non-existing-image.jpg">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Card Tab 2 -->
            <div aria-labelledby="tab2-tab-2" class="tab-pane" id="tab2-2" role="tabpanel">
              <div class="card-body d-flex flex-column align-items-center py-5 my-4 gap-3">
                <svg height="48" stroke="#343a40" viewBox="0 0 50 50" width="48">
                  <g fill="none" fill-rule="evenodd">
                    <g stroke-width="3" transform="translate(2 2)">
                      <circle cx="24" cy="24" r="22" stroke-opacity="0" />
                      <path d="M46 24c0-12.15-9.85-22-22-22">
                        <animateTransform
                          attributeName="transform"
                          dur="1s"
                          from="0 24 24"
                          repeatCount="indefinite"
                          to="360 24 24"
                          type="rotate" />
                      </path>
                    </g>
                  </g>
                </svg>
                <p class="card-text">Loading...</p>
              </div>
            </div>

            <!-- Card Tab 3 -->
            <div aria-labelledby="tab3-tab-2" class="tab-pane" id="tab3-2" role="tabpanel">
              <div class="row g-0 card-body">
                <div class="col-md-4">
                  <img alt="placeholder image description" class="card-img" src="https://picsum.photos/209/280">
                </div>
                <div class="col-md-8 px-1 px-md-4 py-2 py-md-0">
                  <h5 class="card-title mt-3">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                    additional
                    content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>

          <!-- Card Footer -->
          <div class="card-footer bg-light">
            <p class="card-text"><small>2 days ago</small></p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4">
        <div class="card card-secondary max-width-600 mx-auto">
          <!-- Card nav -->
          <div class="card-header">
            <ul class="nav nav-pills tab-primary-dark gap-2" id="myTabs-3" role="tablist">
              <li class="nav-item" role="none">
                <button aria-controls="tab1-3" aria-selected="true" class="nav-link active" data-bs-target="#tab1-3"
                        data-bs-toggle="tab"
                        id="tab1-tab-3" role="tab" type="button">Tab 1
                </button>
              </li>
              <li class="nav-item" role="none">
                <button aria-controls="tab2-3" aria-selected="false" class="nav-link" data-bs-target="#tab2-3"
                        data-bs-toggle="tab" id="tab2-tab-3" role="tab" type="button">Tab 2
                </button>
              </li>
              <li class="nav-item" role="none">
                <button aria-controls="tab3-3" aria-selected="false" class="nav-link" data-bs-target="#tab3-3"
                        data-bs-toggle="tab" id="tab3-tab-3" role="tab" type="button">Tab 3
                </button>
              </li>
              <li class="nav-item" role="none">
                <button aria-disabled="true" class="nav-link disabled" disabled tabindex="-1">Disabled
                </button>
              </li>
            </ul>
          </div>

          <!-- Card Content -->
          <div class="tab-content" id="myTabsContent-3">
            <!-- Card Tab 1 -->
            <div aria-labelledby="tab1-tab-3" class="tab-pane show active" id="tab1-3" role="tabpanel">
              <div class="card-body d-flex flex-column gap-4">
                <div>
                  <h5 class="card-title mt-3">Design Improvements</h5>
                  <h6 class="card-subtitle text-muted ">When consistency meets hierarchy and edge cases</h6>
                </div>
                <div>
                  <ul class="nav nav-pills tab-secondary gap-2 d-flex flex-row" id="myItems-3" role="tablist">
                    <li class="nav-item">
                      <button aria-controls="item1-3" aria-selected="true" class="nav-link active"
                              data-bs-target="#item1-3"
                              data-bs-toggle="tab" id="item1-tab-3" role="tab" type="button">An item with 4/3 ratio
                      </button>
                    </li>
                    <li class="nav-item">
                      <button aria-controls="item2-3" aria-selected="false" class="nav-link" data-bs-target="#item2-3"
                              data-bs-toggle="tab"
                              id="item2-tab-3" role="tab" type="button"> video 16/9 ratio
                      </button>
                    </li>
                    <li class="nav-item">
                      <button aria-controls="item3-3" aria-selected="false" class="nav-link" data-bs-target="#item3-3"
                              data-bs-toggle="tab"
                              id="item3-tab-3" role="tab" type="button">A portrait 3:4 ratio
                      </button>
                    </li>
                    <li class="nav-item">
                      <button aria-controls="item5-3" aria-selected="false" class="nav-link disabled"
                              data-bs-target="#item5-3"
                              data-bs-toggle="tab"
                              id="item5-tab-3" role="tab" type="button">Disable item
                      </button>
                    </li>
                    <li class="nav-item">
                      <button aria-controls="item4-3" aria-selected="false" class="nav-link" data-bs-target="#item4-3"
                              data-bs-toggle="tab"
                              id="item4-tab-3" role="tab" type="button">Broken item
                      </button>
                    </li>
                  </ul>
                </div>
                <div>
                  <div class="tab-content" id="myItemsContent-3">
                    <!-- Item 1 -->
                    <div aria-labelledby="item1-tab-3" class="tab-pane show fade active" id="item1-3" role="tabpanel">
                      <img alt="placeholder image description " class="card-img" src="https://picsum.photos/400/300">
                    </div>
                    <!-- Item 2 -->
                    <div aria-labelledby="item2-tab-3" class="tab-pane fade" id="item2-3" role="tabpanel">
                      <img alt="placeholder image description" class="card-img" src="https://picsum.photos/160/90">
                    </div>
                    <!-- Item 3 -->
                    <div aria-labelledby="item3-tab-3" class="tab-pane fade" id="item3-3" role="tabpanel">
                      <img alt="placeholder image description" class="card-img" src="https://picsum.photos/300/400">
                    </div>
                    <!-- Item 4 -->
                    <div aria-labelledby="item4-tab-3" class="tab-pane show fade rounded-2 ratio ratio-4x3 bg-light"
                         id="item4-3" role="tabpanel">
                      <img alt="Image of an elephant - failed to load" class="card-img" src="non-existing-image.jpg">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Card Tab 2 -->
            <div aria-labelledby="tab2-tab-3" class="tab-pane" id="tab2-3" role="tabpanel">
              <div class="card-body d-flex flex-column align-items-center py-5 my-4 gap-3">
                <svg height="48" stroke="#343a40" viewBox="0 0 50 50" width="48">
                  <g fill="none" fill-rule="evenodd">
                    <g stroke-width="3" transform="translate(2 2)">
                      <circle cx="24" cy="24" r="22" stroke-opacity="0" />
                      <path d="M46 24c0-12.15-9.85-22-22-22">
                        <animateTransform
                          attributeName="transform"
                          dur="1s"
                          from="0 24 24"
                          repeatCount="indefinite"
                          to="360 24 24"
                          type="rotate" />
                      </path>
                    </g>
                  </g>
                </svg>
                <p class="card-text">Loading...</p>
              </div>
            </div>

            <!-- Card Tab 3 -->
            <div aria-labelledby="tab3-tab-3" class="tab-pane" id="tab3-3" role="tabpanel">
              <div class="row g-0 card-body">
                <div class="col-md-4">
                  <img alt="placeholder image description" class="card-img" src="https://picsum.photos/209/280">
                </div>
                <div class="col-md-8 px-1 px-md-4 py-2 py-md-0">
                  <h5 class="card-title mt-3">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                    additional
                    content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>

          <!-- Card Footer -->
          <div class="card-footer bg-light">
            <p class="card-text"><small>2 days ago</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="d-flex justify-content-center py-3 my-5">
      <span class="fw-regular text-body fs-6 bg-white border border-1 rounded-2 py-3 px-4 ">
        Made with 💛 by <br>
        <a class="fw-medium fs-5" href="https://loantranduy.com" rel="noopener noreferrer" target="_blank">
          loan tran duy
        </a>
      </span>
  </footer>
</div>
`;
