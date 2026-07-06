"use client";

import { DeleteJobModal } from "@/lib/actions/RecruterAction/Jobs";
import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";

export function DeleteModalForClick({ DeletedData }) {
    const router = useRouter()
    const jobsId = DeletedData._id
    const DlecteFunctionForClick = async (jobsId) => {
        // console.log(jobsId)
        const DeleteJob = await DeleteJobModal(jobsId)
        router.refresh()
    }

    return (
        <AlertDialog>
            <Button className="flex h-11 w-11 items-center justify-center rounded-full bg-red-500 text-white transition hover:bg-rose-600">
                <TrashBin className="size-5" />
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete this item and all associated data. <br />
                                <span className="font-bold text-red-500">This action cannot be undone.</span>
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={() => DlecteFunctionForClick(jobsId)} slot="close" variant="danger">
                                Delete Project
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}