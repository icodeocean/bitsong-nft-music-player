<template>
  <div class="px-lg-14 px-xs-6 px-sm-3 py-3 mt-7">
    <home-carousel-card />

    <div class="mt-10 text-h5 text-primary d-flex justify-space-between">
      <span>Explore Trend Categories</span>
      <NuxtLink class="text-secondary text-capitalize text-caption my-auto mr-8"
        >see all</NuxtLink
      >
    </div>
    <v-container class="px-0 mx-0">
      <v-row no-gutters>
        <home-horizontal-card
          v-for="n in 6"
          :lg="4"
          :sm="6"
          :xs="12"
          title="Hip-Hop"
          content="2,585 Track"
        >
          <template v-slot:image>
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
            ></v-img>
          </template>
          <template v-slot:action>
            <v-icon
              icon="mdi-play-circle-outline"
              color="secondary"
              class="bs-cursor-pointer"
            ></v-icon>
          </template>
        </home-horizontal-card>
      </v-row>
    </v-container>

    <div class="mt-10 text-h5 text-primary d-flex justify-space-between">
      <span>Mixed For You</span>
      <NuxtLink
        class="text-secondary text-capitalize text-caption my-auto mr-8"
      >
        see all
      </NuxtLink>
    </div>
    <v-container class="px-0 mx-0">
      <v-row no-gutters>
        <home-vertical-card v-for="n in 4" :lg="3" :sm="6" :xs="6">
          <template v-slot:image>
            <v-container class="pa-0 ma-0">
              <v-row class="w-100" no-gutters>
                <v-avatar class="v-col-6 h-auto w-auto" rounded="0">
                  <v-img src="/img/billie.png" alt="billie"></v-img>
                </v-avatar>
                <v-avatar class="v-col-6 h-auto w-auto" rounded="0">
                  <v-img src="/img/bendeniz.png" alt="bendeniz"></v-img>
                </v-avatar>
                <v-avatar class="v-col-6 h-auto w-auto" rounded="0">
                  <v-img src="/img/chavoshi.png" alt="chavoshi"></v-img>
                </v-avatar>
                <v-avatar class="v-col-6 h-auto w-auto" rounded="0">
                  <v-img src="/img/moshen.png" alt="moshen"></v-img>
                </v-avatar>
              </v-row>
            </v-container>
          </template>
          <template v-slot:title> Mix #4 </template>
          <template v-slot:content>
            Taylor Swift, Bendeniz, Moshen Chavoshi, Gryffin
          </template>
        </home-vertical-card>
      </v-row>
    </v-container>

    <div class="mt-10 text-h5 text-primary d-flex justify-space-between">
      <span>New Releases</span>
      <NuxtLink
        class="text-secondary text-capitalize text-caption my-auto mr-8"
      >
        see all
      </NuxtLink>
    </div>
    <v-container class="px-0 mx-0">
      <v-row no-gutters>
        <home-vertical-card v-for="n in 4" :lg="3" :sm="6" :xs="6">
          <template v-slot:image>
            <v-img src="/img/weekend.png" alt="weekend"></v-img>
          </template>
          <template v-slot:title>Save Your Tears</template>
          <template v-slot:content>
            The Weekend
            <v-icon size="30" icon="mdi-circle-small"></v-icon>
            9 May 2023
          </template>
        </home-vertical-card>
      </v-row>
    </v-container>

    <div class="mt-10 text-h5 text-primary d-flex justify-space-between">
      <span>Recomended Artists</span>
      <NuxtLink
        class="text-secondary text-capitalize text-caption my-auto mr-8"
      >
        see all
      </NuxtLink>
    </div>
    <v-container class="px-0 mx-0">
      <v-row no-gutters>
        <home-vertical-card v-for="n in 4" :lg="3" :sm="6" :xs="6">
          <template v-slot:image>
            <div class="bs-bg-blur">
              <v-img
                src="/img/billie.png"
                alt="billie"
                class="rounded-xxl pa-10"
              ></v-img>
            </div>
          </template>
          <template v-slot:title> Rihanna </template>
          <template v-slot:content>
            180 Tracks
            <v-icon size="30" icon="mdi-circle-small"></v-icon>
            5 Albums
          </template>
        </home-vertical-card>
      </v-row>
    </v-container>

    <div class="mt-10 text-h5 text-primary d-flex justify-space-between">
      <span>Recomended Music Videos</span>
      <NuxtLink
        class="text-secondary text-capitalize text-caption my-auto mr-8"
      >
        see all
      </NuxtLink>
    </div>
    <v-container class="px-0 mx-0">
      <v-row no-gutters>
        <home-vertical-card v-for="n in 2" :lg="6" :sm="6" :xs="12">
          <template v-slot:image>
            <v-img src="/img/cover.png" alt="weekend" class="text-center">
              <div class="w-100 h-100 d-flex flex-col justify-center">
                <v-icon
                  icon="mdi-play-outline"
                  class="my-auto bs-cursor-pointer"
                ></v-icon>
              </div>
            </v-img>
          </template>
          <template v-slot:title>I Love It Feet. Andele Givens</template>
          <template v-slot:content> Kanye West & Lil Pump </template>
        </home-vertical-card>
      </v-row>
    </v-container>

    <div class="mt-10 text-h5 text-primary d-flex justify-space-between">
      <span>Live Performances</span>
      <NuxtLink
        class="text-secondary text-capitalize text-caption my-auto mr-8"
      >
        see all
      </NuxtLink>
    </div>
    <v-container class="px-0 mx-0">
      <v-row no-gutters>
        <home-vertical-card v-for="n in 4" :lg="3" :sm="6" :xs="6">
          <template v-slot:image>
            <v-img src="/img/performance.png" alt="weekend"></v-img>
          </template>
          <template v-slot:title>Without Me</template>
          <template v-slot:content>Eminem</template>
        </home-vertical-card>
      </v-row>
    </v-container>

    <div class="mt-10 text-h5 text-primary=">Popular Artists</div>
    <v-container class="px-0 mx-0">
      <v-row no-gutters>
        <home-horizontal-card
          v-for="n in 9"
          :lg="4"
          :sm="6"
          :xs="12"
          title="Eminem"
          content="5,862,148 Follower"
        >
          <template v-slot:image>
            <v-img src="/img/Eminem.png"></v-img>
          </template>
          <template v-slot:action>
            <v-btn
              variant="outlined"
              class="font-weight-light text-secondary text-subtitle-1 px-10 ma-1"
            >
              FOLLOW
            </v-btn>
          </template>
        </home-horizontal-card>
      </v-row>
    </v-container>
  </div>
</template>
