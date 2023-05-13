<template>
  <app-page>
    <template v-slot:title>Profile Information</template>
    <template v-slot:content>
      <v-card class="bs-bg-dark" elevation="0">
        <v-tabs v-model="tab" color="secondary">
          <v-tab
            v-for="(tabItem, index) in tabItems"
            :value="tabItem.title"
            class="text-uppercase bs-no-transparency"
          >
            <v-icon :icon="tabItem.icon" class="mr-2"></v-icon>
            {{ tabItem.title }}
          </v-tab>
        </v-tabs>
        <v-window v-model="tab" class="py-7">
          <v-window-item :value="tabItems[0].title">
            <v-carousel :show-arrows="false" hide-delimiters class="rounded-lg">
              <v-carousel-item
                src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
                cover
              >
                <v-img
                  src="/img/v-avatar.png"
                  alt="John"
                  width="220"
                  height="280"
                ></v-img>
                <div class="ma-5 text-primary">
                  <div class="text-h5">Ted Chow</div>
                  <div>
                    3.8M Followers
                    <v-icon size="30" icon="mdi-circle-small"></v-icon>
                    68M Plays
                  </div>
                </div>
              </v-carousel-item>
            </v-carousel>
            <div class="mt-7">
              <v-row>
                <v-col>
                  <v-text-field
                    :model-value="fullName"
                    label="Full Name"
                    variant="outlined"
                    class="rounded"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    :model-value="email"
                    label="Email Address"
                    variant="outlined"
                    class="rounded"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    :model-value="username"
                    label="User name"
                    variant="outlined"
                    class="rounded"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-textarea
                label="Bio"
                auto-grow
                variant="outlined"
                rows="3"
                row-height="25"
                :model-value="bio"
                shaped
              ></v-textarea>
              <div class="d-flex justify-end">
                <v-btn color="secondary" height="48">
                  <span class="my-auto">Save Changes</span>
                </v-btn>
              </div>
            </div>
          </v-window-item>
          <v-window-item :value="tabItems[1].title">
            <div class="text-h5">Change Password</div>
            <div class="mt-7">
              <v-row>
                <v-col>
                  <v-text-field
                    :model-value="currentPwd"
                    type="password"
                    label="Current Password"
                    variant="outlined"
                    class="rounded"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    :model-value="newPwd"
                    type="password"
                    label="New Password"
                    variant="outlined"
                    class="rounded"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    :model-value="confirmPwd"
                    type="password"
                    label="Repeat New Password"
                    variant="outlined"
                    class="rounded"
                  ></v-text-field>
                </v-col>
              </v-row>
              <div class="d-flex justify-end">
                <v-btn color="secondary" height="48">
                  <span class="my-auto">Save Changes</span>
                </v-btn>
              </div>
            </div>
          </v-window-item>
        </v-window>
      </v-card>
    </template>
  </app-page>
</template>

<script setup lang="ts">
const tab = ref(null)
const tabItems = ref([
  {
    title: "information",
    icon: "mdi-account",
  },
  {
    title: "security",
    icon: "mdi-lock-outline",
  },
])

const fullName = ref("Ted Chow")
const email = ref("tedchow@gmail.com")
const username = ref("@Tedchow21")
const bio = ref(
  "Irure aute dolore ullamco in laboris occaecat ut culpa irure et deserunt minim occaecat eiusmod. Irure aute dolore ullamco in laboris occaecat ut culpa irure et deserunt minim occaecat eiusmod. Irure aute dolore ullamco in laboris occaecat ut culpa irure et deserunt minim occaecat eiusmod."
)

const currentPwd = ref("")
const newPwd = ref("")
const confirmPwd = ref("")
</script>
