import './custom.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

document.querySelector('#app').innerHTML = `
<div class="d-flex justify-content-between flex-column min-vh-100">
    <div class="container pt-5">
    <h1 class="text-center mb-5">Variant A</h1>
      <div class="card max-width-600 mx-auto">
        <!-- Card nav -->
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs gap-2" id="myTabs" role="tablist">
            <li class="nav-item" role="none">
              <button aria-controls="tab1" aria-selected="true" class="nav-link active" data-bs-target="#tab1" data-bs-toggle="tab"
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
              <button disabled aria-disabled="true" class="nav-link bg-secondary disabled" tabindex="-1">Disabled
              </button>
            </li>
          </ul>
        </div>

        <!-- Card Content -->
        <div class="tab-content" id="myTabsContent">
          <!-- Card Tab 1 -->
          <div aria-labelledby="tab1-tab" class="tab-pane show active" id="tab1" role="tabpanel">
            <div class="card-body">
              <h5 class="card-title fw-bold">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted fw-bold">Card subtitle</h6>
            </div>
            <div class="row g-0 border-top">
              <div class="col-12 col-md-6">
                <ul class="list-group list-group-flush d-flex flex-column h-100 nav nav-tabs" id="myItems" role="tablist">
                  <li class="list-group-item flex-fill nav-item d-flex align-items-center">
                    <button aria-controls="item1" aria-selected="true" class="nav-link active border-0 w-100 h-100 text-start" data-bs-target="#item1"
                            data-bs-toggle="tab" id="item1-tab" role="tab" type="button">An item
                    </button>
                  </li>
                  <li class="list-group-item flex-fill nav-item d-flex align-items-center">
                    <button aria-controls="item2" aria-selected="false" class="nav-link border-0 w-100 h-100 text-start" data-bs-target="#item2" data-bs-toggle="tab"
                            id="item2-tab" role="tab" type="button" >A second item
                    </button>
                  </li>
                  <li class="list-group-item flex-fill nav-item d-flex align-items-center">
                    <button aria-controls="item3" aria-selected="false" class="nav-link border-0 w-100 h-100 text-start" data-bs-target="#item3" data-bs-toggle="tab"
                            id="item3-tab" role="tab" type="button">A third item
                    </button>
                  </li>
                </ul>
              </div>
              <div class="col-12 col-md-6">
                <div class="tab-content" id="myItemsContent">
                  <div class="ratio ratio-4x3">
                    <!-- Item 1 -->
                    <div aria-labelledby="item1-tab" class="tab-pane show fade active" id="item1" role="tabpanel">
                      <img alt="placeholder image description" class="card-img h-100 object-fit-cover" src="https://picsum.photos/400/400" placeholder="">
                    </div>
                    <!-- Item 2 -->
                    <div aria-labelledby="item2-tab" class="tab-pane fade" id="item2" role="tabpanel">
                      <img alt="placeholder image description" class="card-img h-100 object-fit-cover" src="https://baconmockup.com/400/300">
                    </div>
                    <!-- Item 3 -->
                    <div aria-labelledby="item3-tab" class="tab-pane fade" id="item3" role="tabpanel">
                      <img alt="placeholder image description" class="card-img h-100 object-fit-cover" src="https://placebear.com/400/500">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Card Tab 2 -->
          <div aria-labelledby="tab2-tab" class="tab-pane" id="tab2" role="tabpanel">
            <div class="card-body d-flex flex-column align-items-center py-5 my-4">
              <p class="card-text">Loading...</p>
              <svg height="48" width="48" stroke="#343a40" viewBox="0 0 50 50">
                <g fill="none" fill-rule="evenodd">
                  <g stroke-width="3" transform="translate(2 2)">
                    <circle cx="24" cy="24" r="22" stroke-opacity="0"/>
                    <path d="M46 24c0-12.15-9.85-22-22-22">
                      <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from="0 24 24"
                            to="360 24 24"
                            dur="1s"
                            repeatCount="indefinite"/>
                    </path>
                  </g>
                </g>
              </svg>

            </div>
          </div>

          <!-- Card Tab 3 -->
          <div aria-labelledby="tab3-tab" class="tab-pane" id="tab3" role="tabpanel">
            <div class="row g-0">
              <div class="col-md-3">
                <img alt="placeholder image description" class="card-img" src="https://picsum.photos/209/280">
              </div>
              <div class="col-md-9">
                <div class="card-body">
                  <h5 class="card-title fw-bold">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                    content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Card Footer -->
        <div>
          <div class="card-footer">
            <p class="card-text text-white"><small class="text-white">2 days ago</small></p>
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
