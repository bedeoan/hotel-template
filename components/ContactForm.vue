<template>
  <div class="flex row">
    <div class="flex-1">
      <div>Contact us</div>
      <div>Address</div>
    </div>
    <div class="flex-1">
      <client-only>

      
      <GMapMap
        :center="center"
        :zoom="7"
        map-type-id="terrain"
        style="width: 500px; height: 300px"
      >
        <GMapCluster>
          <GMapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center = m.position"
          />
        </GMapCluster>
      </GMapMap>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      center: { lat: 51.093048, lng: 6.84212 },
      markers: [
        {
          position: {
            lat: 51.093048,
            lng: 6.84212,
          },
        }, // Along list of clusters
      ],
    };
  },
};
</script>
