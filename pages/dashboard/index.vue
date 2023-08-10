<template>
  <div>
    <b-row class="m-2 mt-4">
      <b-col md="12">
        <b-row>
          <b-col md="6">
            <b-row>
              <b-col md="6">
                <div class="card">
                  <div class="card-header p-2">
                    <div class="title ml-2">
                      {{ $t('Work Items Assigned to me') }}
                    </div>
                  </div>
                  <div class="card-body" style="height: 135px;">
                    <b-row class="mt-2 mb-2">
                      <b-col class="ml-4">
                        <h2 class="mb-0">{{ 5 | fmtNumber(0) }}</h2>
                        <h3>
                          <small class="text-muted">{{ $t('Total Work Items') }}</small>
                        </h3>
                      </b-col>
                    </b-row>
                  </div>
                </div>
              </b-col>
              <b-col md="6">
                <div class="card">
                  <div class="card-header p-2">
                    <div class="title ml-2">
                      {{ $t('Pending Work Items') }}
                    </div>
                  </div>
                  <div class="card-body" style="height: 135px;">
                    <b-row class="mt-2 mb-2">
                      <b-col class="ml-4">
                        <h2 class="mb-0">{{ 4 | fmtNumber(0) }}</h2>
                        <h3>
                          <small class="text-muted">{{ $t('Total Work Items') }}</small>
                        </h3>
                      </b-col>
                    </b-row>
                  </div>
                </div>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6">
                <div class="card">
                  <div class="card-header p-2">
                    <div class="title ml-2">
                      {{ $t('Completed Work Items') }}
                    </div>
                  </div>
                  <div class="card-body" style="height: 135px;">
                    <b-row class="mt-2 mb-2">
                      <b-col class="ml-4">
                        <h2 class="mb-0">{{ 5 | fmtNumber(0) }}</h2>
                        <h3>
                          <small class="text-muted">{{ $t('Total Work Items') }}</small>
                        </h3>
                      </b-col>
                    </b-row>
                  </div>
                </div>
              </b-col>
              <b-col md="6">
                <div class="card">
                  <div class="card-header p-2">
                    <div class="title ml-2">
                      {{ $t('Work Items Due by this week') }}
                    </div>
                  </div>
                  <div class="card-body" style="height: 135px;">
                    <b-row class="mt-2 mb-2">
                      <b-col class="ml-4">
                        <h2 class="mb-0">{{ 3 | fmtNumber(0) }}</h2>
                        <h3>
                          <small class="text-muted">{{ $t('Total Work Items') }}</small>
                        </h3>
                      </b-col>
                    </b-row>
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-col>
          <b-col md="6">
            <div class="card">
              <div class="card-header p-2">
                <div class="title ml-2">
                  {{ $t('Work Items by Status') }}
                </div>
                <div class="action">
                  <b-dropdown variant="link" no-caret toggle-class="mr-2 p-0 text-decoration-none">
                    <template #button-content>
                      <i class="las la-ellipsis-h icon-title text-dark"></i>
                    </template>
                  </b-dropdown>
                </div>
              </div>
              <div class="card-body">
                <b-row class="mt-2 mb-2">
                  <b-col class="ml-4">
                    <b-row>
                      <v-chart :option="optionPie" style="height: 300px;" />
                    </b-row>
                  </b-col>
                </b-row>
              </div>
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="6">
            <div class="card">
              <div class="card-header p-2">
                <div class="title ml-2">
                  {{ $t('Overdue Work Items') }}
                </div>
                <div class="action">
                  <b-dropdown variant="link" no-caret toggle-class="mr-2 p-0 text-decoration-none">
                    <template #button-content>
                      <i class="las la-ellipsis-h icon-title text-dark"></i>
                    </template>
                  </b-dropdown>
                </div>
              </div>
              <div class="card-body overflow-auto" style="height: 21em;">
                <b-row>
                  <b-col md="12">
                    <table class="table borderless">
                      <thead class="table-danger">
                        <tr>
                          <!-- <th scope="col">No.</th> -->
                          <th scope="col">Overdue</th>
                          <th scope="col">Work Items</th>
                          <th scope="col">Due Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(row, index) in rows" :key="index">
                          <!-- <th scope="row">{{ index + 1 }}</th> -->
                          <th>{{ row[1] }}</th>
                          <td>{{ row[2] }}</td>
                          <td>{{ row[3] }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </b-col>
                </b-row>
              </div>
            </div>
          </b-col>
          <b-col md="6">
            <div class="card">
              <div class="card-header p-2">
                <div class="title ml-2">
                  {{ $t('Upcoming Work Items') }}
                </div>
                <div class="action">
                  <b-dropdown variant="link" no-caret toggle-class="mr-2 p-0 text-decoration-none">
                    <template #button-content>
                      <i class="las la-ellipsis-h icon-title text-dark"></i>
                    </template>
                  </b-dropdown>
                </div>
              </div>
              <div class="card-body overflow-auto" style="height: 21em;">
                <b-row>
                  <b-col md="12">
                    <div class="table-responsive">
                      <table class="table borderless">
                        <thead class="table-primary">
                          <tr>
                            <th scope="col">Upcoming</th>
                            <th scope="col">Work Items</th>
                            <th scope="col">Due Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(row, index) in 3" :key="index">
                            <th scope="row">{{ index + 1 }} days</th>
                            <td>{{ 'จัดทำเอกสารเบื้องต้นเพื่อการประชุม' }}</td>
                            <td>{{ '27/06/2023 11:30' }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </b-col>
                </b-row>
              </div>
            </div>
          </b-col>
        </b-row>

        <!-- <b-row>
          <b-col md="6">
            <div class="card">
              <div class="card-header p-2">
                <div class="title ml-2">
                  {{ $t('Work Items by State (Bar)') }}
                </div>
                <div class="action">
                  <b-dropdown variant="link" no-caret toggle-class="mr-2 p-0 text-decoration-none">
                    <template #button-content>
                      <i class="las la-ellipsis-h icon-title text-dark"></i>
                    </template>
                  </b-dropdown>
                </div>
              </div>
              <div class="card-body">
                <b-row class="mt-2 mb-2">
                  <b-col class="ml-4">
                    <b-row>
                      <v-chart :option="optionBar" style="height: 300px;" />
                    </b-row>
                  </b-col>
                </b-row>
              </div>
            </div>
          </b-col>
        </b-row> -->

      </b-col>
    </b-row>
  </div>
</template>

<script>

import CommonMixin from '~/assets/js/CommonMixin'

export default {
  name: 'Dashboard',
  components: {},
  mixins: [CommonMixin],
  data () {
    return {
      selectedDate: null,
      mode: 'datetime',
      rows: [{ 1: '5 days', 2: 'Prepare information for JBP (BigC & Vendor)', 3: '20/06/2023 14:00' }, { 1: '4 days', 2: 'Re-visit plan after Pre-JBP', 3: '22/06/2023 15:00' }, { 1: '3 days', 2: 'Review initiatives Tracking & Progress', 3: '24/06/2023 09:00' }],
      optionBar: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {},
        series: [
          {
            data: [
              { value: 335, name: 'Open' },
              { value: 1548, name: 'Completed' },
              { value: 310, name: 'On Hold' },
              { value: 135, name: 'Cancelled' },
              { value: 234, name: 'On Procress' },
            ],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ],
      },
      optionPie: {
        title: {
          text: 'Work Items',
          left: 'center',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: [
            'Open',
            'On Hold',
            'On Procress',
            'Completed',
            'Cancelled',
          ]
        },
        series: [
          {
            name: 'Work Items',
            type: 'pie',
            radius: ['40%', '70%'],
            // radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 3, name: 'Open' },
              { value: 5, name: 'Completed' },
              { value: 1, name: 'On Hold' },
              { value: 0, name: 'Cancelled' },
              { value: 1, name: 'On Procress' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      },
    }
  },
  computed: {

  },
  mounted () {

  },
  activated () {

  },
  methods: {

  }
}
</script>

<style scoped>
.card {
  border-radius: 1em;
}
.card-header {
  background: transparent;
}
.borderless td, .borderless th {
  border: none;
}
.icon-title {
  font-size: 1.2rem;
}
</style>
