<!-- 
// SPDX-License-Identifier: Apache-2.0
// SPDX-FileCopyrightText: 2021-Present The Zarf Authors
 -->
<script>
	import { Packages } from '$lib/api';
	import { Hero, PackageDetailsCard as PackageDetails, Spinner, Icon } from '$lib/components';
  import PackageSectionHeader from '$lib/components/package-section-header.svelte';
	import { Button, Typography, ButtonIcon } from '@ui';
</script>

<svelte:head>
	<title>Packages</title>
</svelte:head>

{#await Packages.getDeployedPackages()}
	<Spinner title="Retrieving deployed packages"/>
{:then packages}
	{#if packages.length < 1}
		<Hero>
			<div>
				<Typography variant="h3">No deployed packages found 🙁</Typography>
				<Button href="/" variant="flat" color="secondary">Go Home</Button>
			</div>
		</Hero>
	{:else}
		<section class="page-title deployed-packages">
			<Typography variant="h5">Deployment Details</Typography>
			<Button variant="raised" color="secondary">
				<ButtonIcon slot="leadingIcon" class="material-symbols-outlined">rocket_launch</ButtonIcon>
				Deploy Package
			</Button>
		</section>
		{#each packages as pkg}
			<section class="page-section">
				<PackageSectionHeader>
					<Typography variant="h5" slot="title">Package Details</Typography>
					<span slot="tooltip">A table of deployed packages</span>
				</PackageSectionHeader>
				<PackageDetails pkg={pkg.data} />
			</section>
		{/each}
	{/if}
{/await}

<style>
	.deployed-packages {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
</style>
